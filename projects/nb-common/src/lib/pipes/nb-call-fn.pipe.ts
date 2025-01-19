import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'nbCallFn' })
export class NbCallFnPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type
  transform(fn: Function, ...args: any): undefined | unknown {
    if (!fn) return;
    return fn(...args);
  }
}
