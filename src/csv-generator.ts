import {TimesheetOutputInterface} from './interfaces/timesheet'
const fs = require('fs')

// Import the package main module
const csv = require('csv')

export const generateCsvFromArray = (
  data: TimesheetOutputInterface[] | any[],
  outputFile: string
) => {
  const writeStream = fs.createWriteStream(outputFile)

  writeStream.on('error', function (err: Error) {
    console.log(err);
  });

  writeStream.on('end', function (data: any) {
    console.log('done');
    console.log(data)
  });
  writeStream.on('finish', function (data: any) {
    console.log('finish ');
  });

  csv
  .stringify(data, {
    header: true,
    quoted: false,
    columns: {
      date: 'Date',
      person: 'Person',
      project: 'Project',
      hours: 'Hours',
      notes: 'Notes',
    },
  })
  // Print the CSV stream to stdout
  // .pipe(process.stdout)
  .pipe(writeStream)
}
