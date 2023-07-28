import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
  standalone: true,
})
export class CelsiusPipe implements PipeTransform {
  transform(celsius: number | undefined | null): string {
    if (celsius) {
      const sign = celsius >= 0 ? '+' : '-';
      return `${sign}${Math.abs(celsius)}°C`;
    }
    return '';
  }
}
