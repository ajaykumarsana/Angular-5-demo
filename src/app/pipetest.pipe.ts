import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class PipetestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
