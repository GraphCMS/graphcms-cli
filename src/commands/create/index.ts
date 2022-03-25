// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../global.d.ts"/>
import { Command, Flags } from "@oclif/core";
import * as inquirer from "inquirer";
import * as Downloader from "github-download-directory";
import { Options } from "got/dist/source";

const DEFAULT_TEMPLATE:string = "with-nextjs";
const DEFAULT_FRAMEWORK:string = "nextjs";

const OPTIONS:any = {
  packageManager: ['Yarn', 'npm', 'pnpm'],
  framework: ['Nextjs', 'React', 'Vue'],
  projectType: ['GraphCMS Examples', 'UI Extension', 'Web App'],
  examples: {
    nextjs: [
      'with-nextjs',
      'nextjs-store',
    ],
    react: [
      'with-react',
      'react-store',
    ],
    vue: [
      'with-vue',
      'vue-storefront',
    ],
  }
};

export default class Create extends Command {
  static description = "Generate GraphCMS project";

  static examples = [
    `
    $ graphcms create with-algolia
    $ graphcms create using-management-sdk
  `,
  ];

  static flags = {
    packageManager: Flags.string({
      options: OPTIONS.packageManager
    }),
    framework: Flags.string({
      options: OPTIONS.framework
    }),
    projectType: Flags.string({
      options: OPTIONS.projectType,
    }),
  };

  static args = [
    {
      name: "packageManager",
      description: "which template do you want to use",
      required: false,
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Create);
    let { packageManager, framework, projectType } = flags;
    let template = DEFAULT_TEMPLATE;

    if(!packageManager) {
      let responses: any = await inquirer.prompt([{
        name: 'packageManager',
        message: 'Select a package manager',
        type: 'list',
        choices: OPTIONS.packageManager,
        filter(val) {
          return val.toLowerCase();
        }
      }])
      packageManager = responses.packageManager
    }

    if(!framework) {
      let responses: any = await inquirer.prompt([{
        name: 'framework',
        message: 'Select a framework',
        type: 'list',
        choices: OPTIONS.framework,
        filter(val) {
          return val.toLowerCase();
        }
      }])
      framework = responses.framework
    }

    if(!projectType) {
      let responses: any = await inquirer.prompt([{
        name: 'projectType',
        message: 'Select the type of project',
        type: 'list',
        choices: OPTIONS.projectType,
      }]).then(async(answer) => {
        projectType = answer.projectType;
        if(projectType === 'GraphCMS Examples') {
          let projectTypeResponses: any = await inquirer.prompt([{
            name: 'examples',
            message: 'Pick a template',
            type: 'list',
            choices: OPTIONS.examples[framework?.toLowerCase() || DEFAULT_FRAMEWORK],
          }]).then((answer) => {
            template = answer.examples;
          });
        }
      })
      
    }

    this.log(`Package Manager is ${packageManager}`);
    this.log(`Framework is ${framework}`);
    this.log(`Project Type is ${projectType}`);
    this.log(`Template is ${template}`);

    // const path = args.template || DEFAULT_TEMPLATE;
    // await Downloader.download("GraphCMS", "graphcms-examples", path);

    // this.log(`Downloaded ${path}`);
  }
}
