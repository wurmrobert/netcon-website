import { ProvisioningComponent } from './provisioning.component';
import { Routes, RouterModule } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: ProvisioningComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const ProvisioningRouting = RouterModule.forChild(dashboardRoutes);
