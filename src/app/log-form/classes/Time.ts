export class Time {
  date: string;
  project: string;
  hours: number;
  description: string;

  constructor(date: Date, project: string, hours: number, description: string) {
    this.date = this.mutateDate(date);
    this.project = project;
    this.hours = hours;
    this.description = description;
  }

  mutateDate(date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}

