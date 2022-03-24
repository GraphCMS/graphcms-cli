// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../global.d.ts"/>
import { Command } from "@oclif/core";
import * as Downloader from "github-download-directory";

const DEFAULT_TEMPLATE = "with-nextjs";

export default class Create extends Command {
  static description = "Generate GraphCMS project";

  static examples = [
    `
    $ graphcms create with-algolia
    $ graphcms create using-management-sdk
  `,
  ];

  static flags = {};

  static args = [
    {
      name: "template",
      description: "which template do you want to use",
      required: false,
    },
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(Create);
    const path = args.template || DEFAULT_TEMPLATE;
    await Downloader.download("GraphCMS", "graphcms-examples", path);

    this.log(`Downloaded ${path}`);
  }
}
