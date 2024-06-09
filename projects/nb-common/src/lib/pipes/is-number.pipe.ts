import { Pipe, PipeTransform } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsNumber' })
export class NbIsNumberPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) {}

  transform(value: unknown): value is number {
    return this.valueTypeService.isNumber(value);
  }
}
