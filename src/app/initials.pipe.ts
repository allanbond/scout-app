import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ').reduce((initials: string, namePart: string) => 
      initials += namePart.substring(0, 1).toUpperCase()
    );
  }

}
