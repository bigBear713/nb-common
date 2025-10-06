import { Pipe, PipeTransform, TemplateRef, inject } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbTplContent' })
export class NbTplContentPipe implements PipeTransform {
  private valueTypeService: NbValueTypeService = inject(NbValueTypeService);

  transform(value: unknown): TemplateRef<unknown> | null {
    return this.valueTypeService.isTemplateRef(value) ? value : null;
  }
}
