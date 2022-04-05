import { Command } from "@oclif/core";
import fetchGraphcmsExamples from "../../utils/fetchGraphcmsExamples";

export default class List extends Command {
  static description = "List available templates.";

  static examples = ["graphcms list"];

  static flags = {};

  public async run(): Promise<void> {
    const examples = await fetchGraphcmsExamples();

    this.log(
      examples.tree
        .map((template) => template.path)
        .filter((templateName) => templateName.match(/uix|with|using/))
        .join("\n")
    );
  }
}
