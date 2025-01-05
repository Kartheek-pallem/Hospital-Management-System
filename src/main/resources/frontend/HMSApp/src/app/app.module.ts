import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './patient/patient.component';
import { Appointment } from './appointment/appointment.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddAppointmentComponent } from './add.appointment/add.appointment.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPatientComponent } from './add.patient/add.patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PatientComponent,
    Appointment,
    AddAppointmentComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogClose,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
