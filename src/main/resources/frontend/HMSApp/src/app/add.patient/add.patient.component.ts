import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../appointment/appointment.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Patient } from '../patient/patient';
@Component({
  selector: 'app-add.patient',
  standalone: false,
  
  templateUrl: './add.patient.component.html',
  styleUrl: './add.patient.component.css',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class AddPatientComponent {
  appointmentForm:FormGroup | undefined;

  constructor(private dialogRef:MatDialogRef<AddPatientComponent>, private patientService:PatientService, private formBuilder:FormBuilder){

  }

  ngOnInit(){
    this.patientService.getPatientList();
    this.appointmentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(0)]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      symptoms: ['', [Validators.required]],
    });
  }


  onSubmit(form:any){
    if (form.valid) {
      const formData = form.value;
      this.patientService.addPatient(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          // this.appointment.refreshPage(); // Refresh the list after adding
          this.patientService.getPatientList();
        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
      this.dialogRef.close(formData); // Close the dialog and pass the data back to the parent
    }
  }

}
