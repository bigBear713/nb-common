import { Pipe, PipeTransform } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'nbIsString'
})
export class NbIsStringPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) { }

  transform(value: any): value is string {
    return this.valueTypeService.isString(value);
  }
}
