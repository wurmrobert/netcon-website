import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }


  itemClicked(hash) {
    if (window.location.hash === `#${hash}`) {
      this.navbarService.scrollToHash(hash);
    }
  }

}
