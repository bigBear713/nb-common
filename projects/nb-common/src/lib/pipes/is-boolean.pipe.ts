import { Pipe, PipeTransform } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'nbIsBoolean'
})
export class NbIsBooleanPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) { }

  transform(value: any): value is boolean {
    return this.valueTypeService.isBoolean(value);
  }
}
