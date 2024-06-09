import { Component, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBedStatic } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

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

export function getTplRefInstance(TestBed: TestBedStatic): {
  fixture: ComponentFixture<TemplateRefTestingComponent>;
  component: TemplateRefTestingComponent;
  tplRef: TemplateRef<any>
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