import { NgModule } from "@angular/core";
import { NbImgDirective } from "../directives/img.directive";
import { NbCommonModule } from "../nb-common.module";
import { NbValueTypeService } from "../services/value-type.service";
import { TemplateRefTestingModule } from "./templateRef/templateRef-testing.module";

@NgModule({
  providers: [
    NbValueTypeService,
    NbImgDirective,
  ],
  exports: [NbCommonModule, TemplateRefTestingModule]
})
export class NbCommonTestingModule { }