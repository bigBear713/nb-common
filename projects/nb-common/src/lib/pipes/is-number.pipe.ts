import { Pipe, PipeTransform, inject } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsNumber' })
export class NbIsNumberPipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): value is number {
    return this.valueTypeService.isNumber(value);
  }
}
