import { Routes } from '@angular/router';
import { DashboardComponent } from './trainer/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // This makes the dashboard the home page
  { path: 'trainer', component: DashboardComponent }
];
