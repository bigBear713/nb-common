import { Pipe, PipeTransform } from '@angular/core';
import { ValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'isAsync'
})
export class IsAsyncPipe implements PipeTransform {
  constructor(private valueTypeService: ValueTypeService) { }

  transform(value: any): boolean {
    return this.valueTypeService.isObservable(value)
      || this.valueTypeService.isPromise(value);
  }
}
