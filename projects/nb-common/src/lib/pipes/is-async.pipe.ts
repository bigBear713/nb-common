import { Pipe, PipeTransform } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'nbIsAsync'
})
export class NbIsAsyncPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) { }

  transform(value: any): boolean {
    return this.valueTypeService.isObservable(value)
      || this.valueTypeService.isPromise(value);
  }
}
