import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToMegabytes'
})
export class BytesToMegabytesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return (value / (1024 * 1024)).toFixed(2) + ' MB';
  }

}
