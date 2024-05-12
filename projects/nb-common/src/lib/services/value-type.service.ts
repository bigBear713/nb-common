/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, TemplateRef } from '@angular/core';
import { isBoolean, isNumber, isString } from 'lodash-es';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NbValueTypeService {
  constructor() {}

  isBoolean(value: any): value is boolean {
    return isBoolean(value);
  }

  isNumber(value: any): value is number {
    return isNumber(value);
  }

  isObservable(value: any): value is Observable<any> {
    return value instanceof Observable;
  }

  isPromise(value: any): value is Promise<any> {
    return value instanceof Promise;
  }

  isString(value: any): value is string {
    return isString(value);
  }

  isTemplateRef(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }
}
