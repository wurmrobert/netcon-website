import { TranslateModule } from '@ngx-translate/core';
import { SoftwareDevelopmentComponent } from './software-development.component';
import { SoftwareDevelopmentRouting } from './software-development.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, SoftwareDevelopmentRouting, TranslateModule
  ],
  declarations: [
    SoftwareDevelopmentComponent
  ]
})
export class SoftwareDevelopmentModule { }
