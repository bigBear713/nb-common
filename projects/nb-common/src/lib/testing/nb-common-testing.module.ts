import { NgModule } from "@angular/core";
import { NbCommonModule } from "../nb-common.module";
import { NbValueTypeService } from "../services/value-type.service";

@NgModule({
  providers: [
    NbValueTypeService
  ],
  exports: [NbCommonModule]
})
export class NbCommonTestingModule { }