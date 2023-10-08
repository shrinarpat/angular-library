import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
})
export class AgePipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const DAY_IN_MONTH = 30;
    const DAY_IN_YEAR = 365.25;
    const MONTH_IN_YEAR = 12;
    const dob = value.split('T')[0];
    const total_miliseconds_till_dob = Date.parse(dob);
    const total_miliseconds_till_today = new Date().getTime();
    const diff_miliseconds =
      total_miliseconds_till_today - total_miliseconds_till_dob;

    let diff_in_days = diff_miliseconds / (1000 * 60 * 60 * 24);
    const years = Math.round(diff_in_days / DAY_IN_YEAR);
    diff_in_days = Math.round(diff_in_days % DAY_IN_YEAR);
    const months = Math.round(diff_in_days / DAY_IN_MONTH);
    diff_in_days = Math.round(diff_in_days % DAY_IN_MONTH);
    console.log(years, months, diff_in_days);
    return `You are ${years} years ${months} months and ${diff_in_days} days old`;
  }
}
