import { Pipe, PipeTransform, TemplateRef } from '@angular/core';

@Pipe({
  name: 'tplContent'
})
export class TplContentPipe implements PipeTransform {

  transform(value?: any): TemplateRef<any> | null {
    return this.isTemplateRef(value) ? value : null;
  }

  private isTemplateRef(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }

}
