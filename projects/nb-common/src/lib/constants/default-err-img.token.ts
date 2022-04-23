import { InjectionToken } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";

export const NB_DEFAULT_ERR_IMG = new InjectionToken<string | SafeResourceUrl>('default error image');