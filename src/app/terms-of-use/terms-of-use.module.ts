import { TranslateModule } from '@ngx-translate/core';
import { TermsOfUseComponent } from './terms-of-use.component';
import { TermsOfUseRouting } from './terms-of-use.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, TermsOfUseRouting, TranslateModule
  ],
  declarations: [
    TermsOfUseComponent
  ]
})
export class TermsOfUseModule { }
