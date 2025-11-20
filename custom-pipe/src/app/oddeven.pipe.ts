import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddeven'
})
export class OddevenPipe implements PipeTransform {

  transform(value: number): string {
    if( value % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
    
  }

}
