import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormater',
})
export class DateFormaterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''; // Return empty if no value provided

    const date = new Date(value);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set to 12 (12:00 AM)
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Format to HH:mm AM/PM format
    const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;
    return formattedTime;
  }
}
