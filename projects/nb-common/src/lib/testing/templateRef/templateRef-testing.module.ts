/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBedStatic } from '@angular/core/testing';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mock-templateRef',
  template: `<ng-template #tplRef></ng-template>`,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class TemplateRefTestingComponent {
  @ViewChild('tplRef', { static: true }) tplRef!: TemplateRef<any>;
}

@NgModule({
  imports: [CommonModule],
  declarations: [TemplateRefTestingComponent],
  exports: [TemplateRefTestingComponent],
})
export class TemplateRefTestingModule {}

export function getTplRefInstance(TestBed: TestBedStatic): {
  fixture: ComponentFixture<TemplateRefTestingComponent>;
  component: TemplateRefTestingComponent;
  tplRef: TemplateRef<any>;
} {
  const fixture = TestBed.createComponent(TemplateRefTestingComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return {
    fixture,
    component,
    tplRef: component.tplRef,
  };
}
