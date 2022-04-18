import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddEven'
})
export class OddEvenPipe implements PipeTransform {

  transform(array: any, ...args: unknown[]): unknown {
    let old_array = array;
    let new_array = []
    for (let i=0; i<old_array.length; i++){
      if (old_array[i] % 2!==0){
        new_array.push(old_array[i]);

      }
    }
    return new_array;
  }

}
