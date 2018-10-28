import { TranslateModule } from '@ngx-translate/core';
import { ConsultingComponent } from './consulting.component';
import { ConsultingRouting } from './consulting.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, ConsultingRouting, TranslateModule
  ],
  declarations: [
    ConsultingComponent
  ]
})
export class ConsultingModule { }
