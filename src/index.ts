import {Command, flags} from '@oclif/command'
import {getMonday, getMondayToFridayDates} from './handle-week-date'
import {generateCsvFromArray} from './csv-generator'
import {TimesheetOutputInterface} from './interfaces/timesheet'
import {formatLine} from './format-output'

class Timesheet extends Command {
  static description =
    'Generate your .csv file to upload as weekly report. This command will fill out all 5 days of week with your project information.';

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: 'your name or code i.e John Doe [5229]',
    }),
    project: flags.string({
      char: 'p',
      description: 'project name or code i.e FWT [250]',
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Timesheet)
    const {project, name} = flags

    this.log(`Generate .csv for ${name} in the project ${project}`)
    // this.log(getMondayToFridayDates().join('  \n'))

    const data = getMondayToFridayDates().map(element => {
      return formatLine({
        // @ts-ignore
        project,
        date: element,
        person: name!,
        hours: '8',
        notes: 'Bussines as Usual',
      })
    })

    const output = args.name || './output.csv'
    generateCsvFromArray(data, output)
  }
}

export = Timesheet;
