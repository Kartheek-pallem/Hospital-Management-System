import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentService } from '../services/appointment.service';
import { AddAppointmentComponent } from '../add.appointment/add.appointment.component';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-appointment',
  standalone: false,
  
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
  animations:[
    trigger('hoverEffect', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('normal <=> hovered', animate('0.2s ease-in-out')),
    ]),
    trigger('overlayAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-50%)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class Appointment {
  isOverlayVisible: boolean = false;
  selectedAppointment:any;

  constructor(private appointmentService:AppointmentService,private dialog: MatDialog){
    
  }

  ngOnInit(){
    this.getAppointmentsList();
  }

  appointmentsList :any = [];


  getAppointmentsList(){
    return this.appointmentService.getAppointmentsList().subscribe(data=>{
      this.appointmentsList = data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
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
  deleteAppointment(appointment:any){
    this.appointmentService.deleteAppointment(appointment.id).subscribe(response=>{
      console.log(response);
      this.getAppointmentsList();
    });
  }

  hoverState = 'normal';

  onHoverIcon() {
    this.hoverState = 'hovered';
  }

  onLeaveIcon() {
    this.hoverState = 'normal';
  }

  showAppointment(appointment:any){
    this.isOverlayVisible= !this.isOverlayVisible;
    this.selectedAppointment=appointment;
  }

  closeOverlay(){
    this.isOverlayVisible= !this.isOverlayVisible;
  }

  getAppointmentDetails(appointment: any): { label: string; value: any }[] {
    return Object.entries(appointment).map(([key, value]) => ({
        label: this.formatKey(key),
        value,
    }));
  }

  formatKey(key: string): string {
      // Convert camelCase or snake_case to readable text
      return key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toUpperCase();
  }


}
