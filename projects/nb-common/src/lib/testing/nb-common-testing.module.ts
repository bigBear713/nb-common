import { NgModule } from "@angular/core";
import { NbCommonModule } from "../nb-common.module";
import { NbValueTypeService } from "../services/value-type.service";
import { TemplateRefTestingModule } from "./templateRef/templateRef-testing.module";

@NgModule({
  providers: [
    NbValueTypeService,
  ],
  exports: [NbCommonModule, TemplateRefTestingModule]
})
export class NbCommonTestingModule { }