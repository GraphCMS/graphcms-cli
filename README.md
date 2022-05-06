GraphCMS CLI
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @graphcms/cli
$ graphcms COMMAND
running command...
$ graphcms (--version)
@graphcms/cli/0.0.1 darwin-arm64 node-v16.13.2
$ graphcms --help [COMMAND]
USAGE
  $ graphcms COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`graphcms create [TEMPLATE] [PROJECTDIR]`](#graphcms-create-template-projectdir)
* [`graphcms help [COMMAND]`](#graphcms-help-command)
* [`graphcms list`](#graphcms-list)

## `graphcms create [TEMPLATE] [PROJECTDIR]`

Generate GraphCMS project.

```
USAGE
  $ graphcms create [TEMPLATE] [PROJECTDIR] [-p yarn|npm|pnpm] [-t GraphCMS Content API Features &
    Recipes|UI Extensions|Frameworks & Libraries]

ARGUMENTS
  TEMPLATE    Which template do you want to use?
  PROJECTDIR  Where do you want to create new project?

FLAGS
  -p, --packageManager=<option>  Package manager to use
                                 <options: yarn|npm|pnpm>
  -t, --projectType=<option>     Kind of project
                                 <options: GraphCMS Content API Features & Recipes|UI Extensions|Frameworks & Libraries>

DESCRIPTION
  Generate GraphCMS project.

EXAMPLES
      $ graphcms create with-algolia
      $ graphcms create using-management-sdk
```

## `graphcms help [COMMAND]`

Display help for graphcms.

```
USAGE
  $ graphcms help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for graphcms.
```

## `graphcms list`

List available templates.

```
USAGE
  $ graphcms list

DESCRIPTION
  List available templates.

EXAMPLES
  $ graphcms list
```
<!-- commandsstop -->

---

Made with 💜 by GraphCMS 👋 [join our community](https://slack.graphcms.com/)!
