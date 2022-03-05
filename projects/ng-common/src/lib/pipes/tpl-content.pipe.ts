import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { ValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'tplContent'
})
export class TplContentPipe implements PipeTransform {
  constructor(private valueTypeService: ValueTypeService) { }

  transform(value?: any): TemplateRef<any> | null {
    return this.valueTypeService.isTemplateRef(value) ? value : null;
  }


}
