import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mock-templateRef',
  template: `<ng-template #tplRef></ng-template>`,
})
export class TemplateRefTestingComponent {
  @ViewChild('tplRef', { static: true }) tplRef!: TemplateRef<any>;
}

@NgModule({
  imports: [CommonModule],
  declarations: [TemplateRefTestingComponent],
  exports: [TemplateRefTestingComponent]
})
export class TemplateRefTestingModule { }
