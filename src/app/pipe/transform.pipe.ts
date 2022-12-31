import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 55, suffix: string = '...'): any {
    if (value.length > length) {
      let truncated: string = value.substring(0, length).trim() + suffix;
      return truncated;
    }
    return value;
  }
}
