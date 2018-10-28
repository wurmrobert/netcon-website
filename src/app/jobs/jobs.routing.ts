import { JobComponent } from './job/job.component';
import { JobsComponent } from './jobs.component';
import { Routes, RouterModule } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: JobsComponent,
        children: [
            {
                path: ':job',
                component: JobComponent
            }
        ]
    }
];

export const appRoutingProviders: any[] = [

];

export const JobsRouting = RouterModule.forChild(dashboardRoutes);
