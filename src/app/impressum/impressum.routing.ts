import { ImpressumComponent } from './impressum.component';
import { Routes, RouterModule } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: ImpressumComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const ImpressumRouting = RouterModule.forChild(dashboardRoutes);
