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

  /**
   * returns a string date from a date object
   * @param {Date} start
   * @returns {string} date string
   */
  static mutateDate(start: Date): string {
    return `${start.getFullYear()}-${this.padDate(start.getMonth() + 1)}-${this.padDate(start.getDate())}`;
  }

  /**
   * Adds padding to number for creating a ISO compatible date from a Date object for
   * putting into calendar.
   * @param number
   * @returns (string) the last two chars of the string
   */
  static padDate(number) {
    let str = '0' + number;
    return str.slice(-2);
  }
}

