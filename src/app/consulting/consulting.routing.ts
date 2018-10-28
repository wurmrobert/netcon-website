import { ConsultingComponent } from './consulting.component';
import { Routes, RouterModule } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: ConsultingComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const ConsultingRouting = RouterModule.forChild(dashboardRoutes);
