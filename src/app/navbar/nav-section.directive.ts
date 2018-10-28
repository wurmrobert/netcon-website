import { ActivatedRoute } from '@angular/router';
import { NavbarService } from './navbar.service';
import { Directive, ViewChild, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavSection]'
})
export class NavSectionDirective {
  private readonly OFFSET_TOP = -150;
  private readonly OFFSET_BOTTOM = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top + this.OFFSET_TOP;
    const bottom = viewportOffset.bottom + this.OFFSET_BOTTOM;


    if (top <= 0 && bottom > 0) {
        this.navbarService.activeElement = this.elementRef;
    }
  }


  constructor(private elementRef: ElementRef, private navbarService: NavbarService, private route: ActivatedRoute) { }

}
