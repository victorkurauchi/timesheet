import {
  TimesheetInputInterface,
  TimesheetOutputInterface,
} from './interfaces/timesheet'

export const formatLine = (record: TimesheetInputInterface): string[] => {
  // date, person, project, hours, notes
  const {date, person, project, hours, notes} = record
  const d = new Date(date)
  const month = ('0' + (d.getMonth() + 1)).slice(-2)
  const _date = ('0' + d.getDate()).slice(-2)

  return [
    `${d.getFullYear()}-${month}-${_date}`,
    person,
    project,
    hours,
    notes,
  ]
}
