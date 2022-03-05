import { NgModule } from "@angular/core";
import { NgCommonModule } from "../ng-common.module";
import { ValueTypeService } from "../services/value-type.service";

@NgModule({
  providers: [
    ValueTypeService
  ],
  exports: [NgCommonModule]
})
export class NgCommonTestingModule { }