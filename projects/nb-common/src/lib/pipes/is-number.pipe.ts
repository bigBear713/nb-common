import { Pipe, PipeTransform } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ name: 'nbIsNumber' })
export class NbIsNumberPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) { }

  transform(value: any): value is number {
    return this.valueTypeService.isNumber(value);
  }
}
