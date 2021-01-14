import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {

  transform(price: number, ...args: unknown[]): string {
    return '$' + price;
  }

}
