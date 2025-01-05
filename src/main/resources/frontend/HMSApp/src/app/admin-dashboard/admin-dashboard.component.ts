import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../patient/patient';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from '../add.patient/add.patient.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations:[
    trigger('hoverEffect', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('normal <=> hovered', animate('0.2s ease-in-out')),
    ]),
  ]
})

export class AdminDashboardComponent {
  PatientsList: any[] = [];

  constructor(private patientService: PatientService, private router: Router,private dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.getPatientsService();
  }

  showAppointmentsList() {
    this.router.navigate(['/appointmentlist']);
  }

  hoverState = 'normal';

  onHoverIcon() {
    this.hoverState = 'hovered';
  }

  onLeaveIcon() {
    this.hoverState = 'normal';
  }

  getPatientsService() {
    this.patientService.getPatientList().subscribe(data => {
      this.PatientsList = data;
    });
  }
  deletePatient(patient:any){
    this.patientService.deletePatient(patient.patientId).subscribe(response=>{
      console.log(response);
      this.getPatientsService();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPatientComponent, {
      width: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form Data:', result);
        // Handle form submission logic here
      }
    });
  }

}
