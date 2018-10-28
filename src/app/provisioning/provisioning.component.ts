import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-provisioning',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.scss']
})
export class ProvisioningComponent implements OnInit, AfterViewInit {


  images_provisioning = [
    { src: 'assets/provisioning/screenshots/Provisioning.png', caption: 'Provisioning' },
    { src: 'assets/provisioning/screenshots/Verwaltung.png', caption: 'Verwaltung' },
    { src: 'assets/provisioning/screenshots/Provisioning1.png', caption: 'Provisioning' }
  ];


  images_customer = [
    { src: 'assets/provisioning/screenshots/Verwaltung.png', caption: 'Kundenverwaltung' }
  ];

  images_ip = [
    { src: 'assets/provisioning/screenshots/IP-Management.png', caption: 'IP-Management' }
  ];

  images_monitoring = [
    { src: 'assets/provisioning/screenshots/Monitoring.png', caption: 'Monitoring' }
  ];

  showProvisioningVideoTabs = false;
  showManagementVideoTabs = false;
  constructor(
    meta: Meta, title: Title,
    private navbarService: NavbarService
    ) {
    title.setTitle('EasySolutions - ACS TR-069 Provisionierung');
    this.navbarService.activePage = 'provisioning';
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.navbarService.scrollToTop();
  }

}
