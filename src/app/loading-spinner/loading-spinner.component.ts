import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'easy-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  @Input() spinnerType: number = 1; 
  @Input() title: string = "Loading"; 
  
  @Input() showSpinner: boolean;

  constructor() { 
    this.showSpinner = false;
  }

  ngOnInit() {
  }

  public show() {
    this.showSpinner = true;    
  }

  public hide() {
    this.showSpinner = false;    
  }

}
