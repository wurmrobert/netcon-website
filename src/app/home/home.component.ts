import { NavbarService } from './../navbar/navbar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor(
    private router: Router,
    private navbarService: NavbarService
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


  showSkillsFor(person: string) {
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
