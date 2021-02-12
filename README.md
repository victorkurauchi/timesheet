timesheet
=========

Nodejs CLI to automate timesheet reports for contractors

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/timesheet.svg)](https://npmjs.org/package/timesheet)
[![Downloads/week](https://img.shields.io/npm/dw/timesheet.svg)](https://npmjs.org/package/timesheet)
[![License](https://img.shields.io/npm/l/timesheet.svg)](https://github.com/victorkurauchi/timesheet/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

### Development usage

`./bin/run`

Provide your name and your project when prompted:

- Victor [5229] 
- FWT [250]

### Testing

`npm test`

### Usage
<!-- usage -->
```sh-session
$ npm install -g timesheet
$ timesheet COMMAND
running command...
$ timesheet (-v|--version|version)
timesheet/0.0.1 darwin-x64 node-v12.18.3
$ timesheet --help [COMMAND]
USAGE
  $ timesheet COMMAND
...
```
<!-- usagestop -->
### Commands
<!-- commands -->

<!-- commandsstop -->


### To do:

- [x] save name and project locally so user doesn't need to provide details every time
- [ ] option to re-save the project and name
- [ ] save file in a better format than output.csv (ie `feb-01-to-05.csv`)
- [ ] show amount of hours per day ?
- [ ] option to set description for each day a
