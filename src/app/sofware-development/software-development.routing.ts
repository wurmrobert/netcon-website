import { SoftwareDevelopmentComponent } from './software-development.component';
import { Routes, RouterModule } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: SoftwareDevelopmentComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const SoftwareDevelopmentRouting = RouterModule.forChild(dashboardRoutes);
