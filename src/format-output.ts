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

export const getFilename = (firstDate: string, lastDate: string): string => {
  const first = new Date(firstDate)
  const last = new Date(lastDate)

  const _first = ('0' + first.getDate()).slice(-2)
  const _last = ('0' + last.getDate()).slice(-2)

  return `-${_first}-to-${_last}.csv`
}
