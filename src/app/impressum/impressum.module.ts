import { TranslateModule } from '@ngx-translate/core';
import { ImpressumComponent } from './impressum.component';
import { ImpressumRouting } from './impressum.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, ImpressumRouting, TranslateModule
  ],
  declarations: [
    ImpressumComponent
  ]
})
export class ImpressumModule { }
