import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { NbValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'nbIsObservable'
})
export class NbIsObservablePipe implements PipeTransform {
  constructor(private valueTypeService: NbValueTypeService) { }

  transform(value: any): value is Observable<any> {
    return this.valueTypeService.isObservable(value);
  }
}
