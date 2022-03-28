// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../types.d.ts"/>
import { Command, Flags } from "@oclif/core";
import spinner from "ora-promise";
import * as inquirer from "inquirer";
import { Downloader } from "github-download-directory";
import path from "path";
import { move } from "fs-extra";
import spawn from "../../utils/spawnPromise";
import fetchGraphcmsExamples from "../../utils/fetchGraphcmsExamples";
import { KeyvFile } from "keyv-file";
import { GCMS_GH_TOKEN } from "../../constants";

type CliOptions = {
  readonly packageManager: Array<string>;
  readonly projectType: Array<string>;
};

const options: CliOptions = {
  packageManager: ["yarn", "npm", "pnpm"],
  projectType: [
    "GraphCMS Content API Features & Recipes",
    "UI Extensions",
    "Frameworks & Libraries",
  ],
};

export default class Create extends Command {
  static description = "Generate GraphCMS project.";

  static examples = [
    `
    $ graphcms create with-algolia
    $ graphcms create using-management-sdk
  `,
  ];

  static flags = {
    packageManager: Flags.string({
      options: options.packageManager,
      char: "p",
      description: "Package manager to use",
    }),
    projectType: Flags.string({
      options: options.projectType,
      char: "t",
      description: "Kind of project",
    }),
  };

  static args = [
    {
      name: "template",
      description: "Which template do you want to use?",
      required: false,
    },
    {
      name: "projectDir",
      description: "Where do you want to create new project?",
      required: false,
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Create);

    const data = await fetchGraphcmsExamples();

    const allExamples = data.tree.map((example) => example.path);

    const uixExamples = allExamples.filter((file) => file.match(/uix/));
    const graphcmsFeatures = allExamples.filter((file) => file.match(/using/));
    const frameworkExamples = allExamples.filter((file) => file.match(/with/));

    const getChoices = (projectType: string | undefined) => {
      if (projectType === undefined) {
        throw "Please define a project type";
      }

      if (projectType === options.projectType[0]) {
        return graphcmsFeatures;
      }

      if (projectType === options.projectType[1]) {
        return uixExamples;
      }

      if (projectType === options.projectType[2]) {
        return frameworkExamples;
      }
    };

    let { packageManager, projectType } = flags;
    let template;
    let projectDir = args.projectDir;

    if (!packageManager) {
      const responses = await inquirer.prompt([
        {
          name: "packageManager",
          message: "Select a package manager",
          type: "list",
          choices: options.packageManager,
          filter(val) {
            return val.toLowerCase();
          },
        },
      ]);

      packageManager = responses.packageManager;
    }

    if (!projectType && !args.template) {
      const responses = await inquirer.prompt([
        {
          name: "projectType",
          message: "Select the type of project",
          type: "list",
          choices: options.projectType,
        },
      ]);

      projectType = responses.projectType;

      const projectTypeResponses = await inquirer.prompt([
        {
          name: "examples",
          message: "Pick a template",
          type: "list",
          choices: getChoices(responses.projectType),
        },
      ]);

      template = projectTypeResponses.examples;
    }

    if (!projectDir) {
      const projectDirResponse = await inquirer.prompt([
        {
          name: "projectDir",
          message: "Enter project directory name",
          type: "input",
          default: template,
        },
      ]);

      projectDir = projectDirResponse.projectDir;
    }

    const project = template ?? args.template;

    if (!project) {
      throw new Error("No template defined aborting create");
    }

    const store = new KeyvFile();

    const authTokenDownloader = new Downloader({
      cache: { store },
      github: { auth: GCMS_GH_TOKEN },
    });

    await spinner("Downloading template", () =>
      authTokenDownloader.download("GraphCMS", "graphcms-examples", project)
    );

    const existingProjectPath = path.join(process.cwd(), project);
    const newProjectPath = path.join(process.cwd(), projectDir);

    if (existingProjectPath !== newProjectPath) {
      await move(existingProjectPath, newProjectPath);
    }

    await spinner("Installing Dependencies", () =>
      spawn(packageManager ?? "yarn", ["install"], {
        cwd: newProjectPath,
      })
    );

    this.log(`Downloaded ${project}`);
  }
}
