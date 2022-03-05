import { Injectable, TemplateRef } from '@angular/core';
import { isString } from 'lodash-es';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueTypeService {
  constructor() { }

  isObservable(value: any): value is Observable<any> {
    return value instanceof Observable;
  }

  isPromise(value: any): value is Promise<any> {
    return value instanceof Promise;
  }

  isString(value: any): boolean {
    return isString(value);
  }

  isTemplateRef(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }
}
