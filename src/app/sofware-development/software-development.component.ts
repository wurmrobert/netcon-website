import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent implements OnInit, AfterViewInit {

  constructor(
    meta: Meta, title: Title,
    private navbarService: NavbarService
  ) {
    title.setTitle('EasySolutions - Software Entwicklung');
    this.navbarService.activePage = 'sofware-development';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

}
