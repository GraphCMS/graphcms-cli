#!/usr/bin/env node

import { Command } from "commander";
import create from "./commands/create";
import list from "./commands/list";
import * as packageInfo from "../package.json";

const program = new Command();

program.name("GraphCMS CLI").version(packageInfo.version);

program
  .command("create")
  .description("Generate GraphCMS project.")
  .argument("[template]", "Which template do you want to use?")
  .argument("[projectDir]", "Where do you want to create new project?")
  .option("-p, --package-manager <packageManager>", "Package manager to use")
  .option("-t, --project-type <projectType>", "Type of project")
  .action(create);

program.command("list").description("List available templates.").action(list);

program.parse();
