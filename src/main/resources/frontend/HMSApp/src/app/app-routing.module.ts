import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Appointment } from './appointment/appointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent }, // Default route
  { path: 'appointmentlist', component: Appointment}, 
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
