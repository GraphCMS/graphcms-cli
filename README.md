GraphCMS CLI
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g graphcms-cli
$ graphcms COMMAND
running command...
$ graphcms (--version)
graphcms-cli/0.0.0 darwin-arm64 node-v16.13.2
$ graphcms --help [COMMAND]
USAGE
  $ graphcms COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`graphcms create [TEMPLATE]`](#graphcms-create-template)
* [`graphcms help [COMMAND]`](#graphcms-help-command)

## `graphcms create [TEMPLATE]`

Generate GraphCMS project

```
USAGE
  $ graphcms create [TEMPLATE]

ARGUMENTS
  TEMPLATE  which template do you want to use

DESCRIPTION
  Generate GraphCMS project

EXAMPLES
      $ graphcms create with-algolia
      $ graphcms create using-management-sdk
```

_See code: [dist/commands/create/index.ts](https://github.com/graphcms/graphcms-cli/graphcms-cli/blob/v0.0.0/dist/commands/create/index.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_
<!-- commandsstop -->
