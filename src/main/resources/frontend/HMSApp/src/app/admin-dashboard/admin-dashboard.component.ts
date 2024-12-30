import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,

  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent {


  PatientsList:any=[];

  constructor(private patientService:PatientService){

  }

  ngOnInit(){
    this.getPatientsService();
  }

  getPatientsService(){
    this.patientService.getPatientList().subscribe(data=>{
      this.PatientsList = data;
    });
  }

}
