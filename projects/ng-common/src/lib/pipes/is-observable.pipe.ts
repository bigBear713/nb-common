import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ValueTypeService } from '../services/value-type.service';

@Pipe({
  name: 'isObservable'
})
export class IsObservablePipe implements PipeTransform {
  constructor(private valueTypeService: ValueTypeService) { }

  transform(value: any): value is Observable<any> {
    return this.valueTypeService.isObservable(value);
  }

}
