import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Appointment } from './appointment/appointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent }, // Default route
  { path: 'appointmentlist', component: Appointment}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
