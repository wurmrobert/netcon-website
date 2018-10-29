import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit, AfterViewInit {

  constructor(private navbarService: NavbarService, meta: Meta, title: Title) {
    title.setTitle('EasySolutions - Consulting');
    this.navbarService.activePage = 'consulting';
  }


  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.navbarService.scrollToTop();
  }


}
