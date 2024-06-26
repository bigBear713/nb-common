import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({ standalone: true, name: 'nbTplContent' })
export class NbTplContentPipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) {}

  transform(value: unknown): TemplateRef<unknown> | null {
    return this.valueTypeService.isTemplateRef(value) ? value : null;
  }
}
