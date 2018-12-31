import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { Component, AfterViewInit } from '@angular/core';

declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('1000ms')),
      transition('hidden => shown', animate('1000ms')),
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  visibility = 'hidden';

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // setTimeout(() => {
        //   try {
        //     if (ga) {
        //       ga('set', 'page', event.url);
        //       ga('send', 'pageview');
        //       ga('set', 'anonymizeIp', true);
        //     }
        //   } catch (ex) {
        //     console.error('google analytics: ', ex);
        //   }
        // }, 1000);
      }
    });


    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

  }


  public ngAfterViewInit() {
    setTimeout(() => {
      this.visibility = 'shown';
    }, 1000);

  }
}
