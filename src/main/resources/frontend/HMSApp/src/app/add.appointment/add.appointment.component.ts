import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../appointment/appointment.component';

@Component({
  selector: 'app-add.appointment',
  standalone: false,
  
  templateUrl: './add.appointment.component.html',
  styleUrl: './add.appointment.component.css',
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
export class AddAppointmentComponent {

  constructor(private dialogRef:MatDialogRef<AddAppointmentComponent>, private appointmentService:AppointmentService, private appointment:Appointment){

  }

  ngOnInit(){
    this.appointmentService.getAppointmentsList();
  }


  onSubmit(form:any){
    if (form.valid) {
      const formData = form.value;
      this.appointmentService.addAppointments(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          // this.appointment.refreshPage(); // Refresh the list after adding
          window.location.reload();
        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
      this.dialogRef.close(formData); // Close the dialog and pass the data back to the parent
    }
  }

}
