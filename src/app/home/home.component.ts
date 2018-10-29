import { DisplayDetector, DisplayType } from './../display-detector.service';
import { NavbarService } from './../navbar/navbar.service';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  showHeaderText = true;
  currentHeaderIndex = 0;

  headerTexts = [
    'There is always an easy solution',
    'TR069-ACS Provisionierung',
    'SNMP Analyse von Endgeräten',
    'Enterprise Software for ISP'
  ];

  skills = {
    Unsere: [
      {
        title: 'about_us.our_team.robert_wurm.skills1',
        value: 90
      },
      {
        title: 'about_us.our_team.robert_wurm.skills2',
        value: 80
      },
      {
        title: 'about_us.our_team.robert_wurm.skills3',
        value: 80
      },
      {
        title: 'about_us.our_team.robert_wurm.skills4',
        value: 80
      },
      {
        title: 'about_us.our_team.robert_wurm.skills5',
        value: 90
      }
    ],
    Mathias: [
      {
        title: 'about_us.our_team.mathias_aichinger.skills1',
        value: 90
      },
      {
        title: 'about_us.our_team.mathias_aichinger.skills2',
        value: 90
      },
      {
        title: 'about_us.our_team.mathias_aichinger.skills3',
        value: 40
      },
      {
        title: 'about_us.our_team.mathias_aichinger.skills4',
        value: 80
      },
      {
        title: 'about_us.our_team.mathias_aichinger.skills5',
        value: 90
      }
    ],
    Roberts: [
      {
        title: 'about_us.our_team.robert_wurm.skills1',
        value: 60
      },
      {
        title: 'about_us.our_team.robert_wurm.skills2',
        value: 90
      },
      {
        title: 'about_us.our_team.robert_wurm.skills3',
        value: 90
      },
      {
        title: 'about_us.our_team.robert_wurm.skills4',
        value: 40
      },
      {
        title: 'about_us.our_team.robert_wurm.skills5',
        value: 90
      }
    ],
    Christians: [
      {
        title: 'about_us.our_team.christian_aichinger.skills1',
        value: 60
      },
      {
        title: 'about_us.our_team.christian_aichinger.skills2',
        value: 90
      },
      {
        title: 'about_us.our_team.christian_aichinger.skills3',
        value: 20
      },
      {
        title: 'about_us.our_team.christian_aichinger.skills4',
        value: 90
      },
      {
        title: 'about_us.our_team.christian_aichinger.skills5',
        value: 90
      }
    ]
  }

  currentSkill = {
    name: 'Unsere',
    value: this.skills.Unsere,
    isPerson: false
  }

  displayType = DisplayType;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    public displayDetector: DisplayDetector
  ) {
    this.navbarService.activePage = 'home';
  }

  ngOnInit() {
    setInterval(() => {
      this.showHeaderText = false;
      if (this.currentHeaderIndex >= this.headerTexts.length - 1) {
        this.currentHeaderIndex = 0;
      } else {
        this.currentHeaderIndex ++;
      }
      setTimeout(() => {
        this.showHeaderText = true;
      }, 100);
      // console.log('headerTexts: ', this.headerTexts[this.currentHeaderIndex]);
    }, 8000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.location.hash) {
        const hash = window.location.hash.split('#');
        if (hash.length > 1)  {
          this.navbarService.scrollToHash(hash[1], true);
        }
      }
    }, 300);
  }

  get mobileMode(): boolean {
    return this.displayDetector.getDeviceType() === this.displayType.Phone;
  }

  showSkillsFor(person: string) {
    if (this.displayDetector.getDeviceType() === DisplayType.Phone) {
      return;
    }
    this.currentSkill.name = person;
    this.currentSkill.value = this.skills[person];
    this.currentSkill.isPerson = this.currentSkill.name !== 'Unsere';
  }


  onTeamSectionClicked(e: MouseEvent) {
    if (e.srcElement.tagName !== 'IMG') {
      this.showSkillsFor('Unsere');
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}