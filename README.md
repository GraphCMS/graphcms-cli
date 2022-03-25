oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

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
* [`graphcms plugins`](#graphcms-plugins)
* [`graphcms plugins:install PLUGIN...`](#graphcms-pluginsinstall-plugin)
* [`graphcms plugins:inspect PLUGIN...`](#graphcms-pluginsinspect-plugin)
* [`graphcms plugins:install PLUGIN...`](#graphcms-pluginsinstall-plugin-1)
* [`graphcms plugins:link PLUGIN`](#graphcms-pluginslink-plugin)
* [`graphcms plugins:uninstall PLUGIN...`](#graphcms-pluginsuninstall-plugin)
* [`graphcms plugins:uninstall PLUGIN...`](#graphcms-pluginsuninstall-plugin-1)
* [`graphcms plugins:uninstall PLUGIN...`](#graphcms-pluginsuninstall-plugin-2)
* [`graphcms plugins update`](#graphcms-plugins-update)

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

## `graphcms plugins`

List installed plugins.

```
USAGE
  $ graphcms plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ graphcms plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `graphcms plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ graphcms plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ graphcms plugins add

EXAMPLES
  $ graphcms plugins:install myplugin 

  $ graphcms plugins:install https://github.com/someuser/someplugin

  $ graphcms plugins:install someuser/someplugin
```

## `graphcms plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ graphcms plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ graphcms plugins:inspect myplugin
```

## `graphcms plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ graphcms plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ graphcms plugins add

EXAMPLES
  $ graphcms plugins:install myplugin 

  $ graphcms plugins:install https://github.com/someuser/someplugin

  $ graphcms plugins:install someuser/someplugin
```

## `graphcms plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ graphcms plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ graphcms plugins:link myplugin
```

## `graphcms plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphcms plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphcms plugins unlink
  $ graphcms plugins remove
```

## `graphcms plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphcms plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphcms plugins unlink
  $ graphcms plugins remove
```

## `graphcms plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ graphcms plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphcms plugins unlink
  $ graphcms plugins remove
```

## `graphcms plugins update`

Update installed plugins.

```
USAGE
  $ graphcms plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
