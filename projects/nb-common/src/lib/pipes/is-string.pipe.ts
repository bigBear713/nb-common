import { Pipe, PipeTransform, inject } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbIsString' })
export class NbIsStringPipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): value is string {
    return this.valueTypeService.isString(value);
  }
}
