export interface TimesheetInputInterface {
  date: string;
  person: string;
  project: string;
  hours: string;
  notes: string;
}

export interface TimesheetOutputInterface {
  date: string;
  person: string;
  project: string;
  hours: number;
  notes: string;
}
