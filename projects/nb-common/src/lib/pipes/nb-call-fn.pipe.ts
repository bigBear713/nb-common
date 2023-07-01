import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'nbCallFn' })
export class NbCallFnPipe implements PipeTransform {

  transform(fn: Function, ...args: any): any {
    if (!fn) return;
    return fn(...args);
  }

}
