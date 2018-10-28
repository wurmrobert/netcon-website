import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit, AfterViewInit {
  

  constructor(
    meta: Meta, title: Title,
    private navbarService: NavbarService
  ) {
    title.setTitle('EasySolutions - Nutzungsbedingungen');
    this.navbarService.activePage = 'terms-of-use';
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.navbarService.scrollToTop();
  }

}
