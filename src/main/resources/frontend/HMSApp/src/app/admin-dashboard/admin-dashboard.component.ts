import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent {
  PatientsList: any[] = [];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit() {
    this.getPatientsService();
  }

  onElementClick() {
    this.router.navigate(['/appointmentlist']);
  }

  getPatientsService() {
    this.patientService.getPatientList().subscribe(data => {
      this.PatientsList = data;
    });
  }
}
