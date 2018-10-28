import { TermsOfUseComponent } from './terms-of-use.component';
import { Routes, RouterModule } from '@angular/router';


const termsOfUseRoutes: Routes = [
    {
        path: '',
        component: TermsOfUseComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const TermsOfUseRouting = RouterModule.forChild(termsOfUseRoutes);
