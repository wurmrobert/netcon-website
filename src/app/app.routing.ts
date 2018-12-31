import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'impressum', loadChildren: './impressum/impressum.module#ImpressumModule' },

    { path: 'nutzungsbedingungen', loadChildren: './terms-of-use/terms-of-use.module#TermsOfUseModule' },
    { path: 'unternehmen/jobs', loadChildren: './jobs/jobs.module#JobsModule' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
