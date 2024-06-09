import { InjectionToken } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export const NB_DEFAULT_LOADING_IMG = new InjectionToken<string | SafeResourceUrl>(
  'default loading image'
);
