/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const defaultGtag = () => {};
const gtag = (window as any).gtag || defaultGtag;

const website_id = '@bigbear713/nb-common';
const website_ga_id = (window as any).website_ga_id;
const libs_ga_id = (window as any).libs_ga_id;

@Injectable({
  providedIn: 'root',
})
export class GTagService {
  constructor(private router: Router) {}

  trackPage(props: object): void {
    this.trackEvent('View_Page', props);
  }

  trackButton(props: object): void {
    this.trackEvent('Click_Button', props);
  }

  trackLink(props: object): void {
    this.trackEvent('Visit_Link', props);
  }

  private trackEvent(eventName: string, props: object): void {
    const trackCurrProps = {
      send_to: website_ga_id,
      datetime: dayjs().utc().format(),
      url: this.router.url,
      language: 'en',
      ...props,
    };
    const trackLibsProps = {
      ...trackCurrProps,
      send_to: libs_ga_id,
      website_id: website_id,
    };
    gtag('event', eventName, trackCurrProps);
    gtag('event', eventName, trackLibsProps);
  }
}
