import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dzCode'
})
export class DzCodePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/\n/g, '<br>')
  }

}
