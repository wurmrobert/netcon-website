import { PdfViewerModule } from 'ng2-pdf-viewer';
import { JobComponent } from './job/job.component';
import { TranslateModule } from '@ngx-translate/core';
import { JobsComponent } from './jobs.component';
import { JobsRouting } from './jobs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyLoadingSpinnerModule } from '../loading-spinner/easy-loading-spinner.module';

@NgModule({
  imports: [
    CommonModule, JobsRouting, TranslateModule,
    PdfViewerModule,
    EasyLoadingSpinnerModule
  ],
  declarations: [
    JobsComponent,
    JobComponent
  ]
})
export class JobsModule { }
