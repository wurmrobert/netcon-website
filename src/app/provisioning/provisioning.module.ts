import { NguiInViewModule } from './../ngui-in-view/ngui-in-view.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProvisioningComponent } from './provisioning.component';
import { ProvisioningRouting } from './provisioning.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacSlideshowComponent } from './mac-slideshow/mac-slideshow.component';

@NgModule({
  imports: [
    CommonModule, ProvisioningRouting, TranslateModule,
    NguiInViewModule
  ],
  declarations: [
    ProvisioningComponent,
    MacSlideshowComponent
  ]
})
export class ProvisioningModule { }
