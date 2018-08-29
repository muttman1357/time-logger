export class Time {
  id: string;
  start: string;
  title: string;
  hours: number;
  description: string;

  constructor(id: string, start: string, title: string, hours: number, description: string) {
    this.id = id;
    this.start = start;
    this.title = title;
    this.hours = hours;
    this.description = description;
  }

  static mutateDate(start: Date): string {
    return `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`;
  }
}

