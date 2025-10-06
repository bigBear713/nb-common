import { Pipe, PipeTransform, inject } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsBoolean' })
export class NbIsBooleanPipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): value is boolean {
    return this.valueTypeService.isBoolean(value);
  }
}
