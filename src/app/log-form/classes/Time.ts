export class Time {
  id: string;
  date: string;
  project: string;
  hours: number;
  description: string;

  constructor(id: string, date: string, project: string, hours: number, description: string) {
    this.id = id;
    this.date = date;
    this.project = project;
    this.hours = hours;
    this.description = description;
  }

  static mutateDate(date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}

