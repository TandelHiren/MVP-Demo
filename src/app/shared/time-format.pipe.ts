import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: string): any {
    let timeString = value;
    const H = +timeString.substr(0, 2);
    const h = (H % 12) || 12;
    const ampm = H < 12 ? 'AM' : 'PM';
    timeString = h + timeString.substr(2, 3) + ':' + ampm;
    return timeString;
  }

}
