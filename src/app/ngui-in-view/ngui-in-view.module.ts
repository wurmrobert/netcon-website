import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiInViewComponent } from './ngui-in-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NguiInViewComponent
  ],
  exports: [
    NguiInViewComponent
  ]
})
export class NguiInViewModule { }
