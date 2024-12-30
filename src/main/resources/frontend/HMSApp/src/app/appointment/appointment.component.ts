import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class Appointment {

  constructor(private appointmentService:AppointmentService){

  }

  appointmentsList :any = [];


  getAppointmentsList(){
    return this.appointmentService.getAppointmentsList().subscribe(data=>{
      this.appointmentsList = data;
    })
  }

}
