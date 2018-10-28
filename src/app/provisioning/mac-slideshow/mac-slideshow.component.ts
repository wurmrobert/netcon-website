import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-mac-slideshow',
  templateUrl: './mac-slideshow.component.html',
  styleUrls: ['./mac-slideshow.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('300ms')),
      transition('hidden => shown', animate('1000ms')),
    ])
  ]
})
export class MacSlideshowComponent implements OnInit, OnDestroy {

  @Input()
  images: Array<{ src: string, caption: string }>;

  @Input()
  startTimeout = 0; 

  images_visible = 'shown';
  images_i = 0;

  private interval;
  private readonly INTERVAL_TIME = 8000;
  private readonly SHOW_HIDE_TIME = 300;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.startSlideshow();
    }, this.startTimeout);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  startSlideshow() {
    this.interval = setInterval(() => {
      this.images_visible = 'hidden';
      setTimeout(() => {
        if (this.images_i >= this.images.length - 1) {
          this.images_i = 0;
        } else {
          this.images_i++;
        }
        this.images_visible = 'shown';
      }, this.SHOW_HIDE_TIME);
    }, this.INTERVAL_TIME);
  }
}
