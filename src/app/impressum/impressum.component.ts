import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit, AfterViewInit {


  constructor(
    meta: Meta, title: Title,
    private navbarService: NavbarService
  ) {
    title.setTitle('EasySolutions - Impressum');
    this.navbarService.activePage = 'impressum';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.navbarService.scrollToTop();
  }

}
