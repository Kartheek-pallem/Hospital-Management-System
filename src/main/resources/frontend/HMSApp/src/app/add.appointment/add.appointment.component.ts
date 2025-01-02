import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add.appointment',
  standalone: false,
  
  templateUrl: './add.appointment.component.html',
  styleUrl: './add.appointment.component.css',
  animations: [
    trigger('dialogAnimation', [
      // Entry animation
      transition(':enter', [
        animate(
          '600ms ease-out',
          keyframes([
            style({ opacity: 0, transform: 'scale(0.5) rotate(-10deg)', offset: 0 }),
            style({ opacity: 0.5, transform: 'scale(1.1) rotate(5deg)', offset: 0.7 }),
            style({ opacity: 1, transform: 'scale(1) rotate(0)', offset: 1 })
          ])
        )
      ]),
      // Exit animation
      transition(':leave', [
        animate(
          '400ms ease-in',
          keyframes([
            style({ opacity: 1, transform: 'scale(1) rotate(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'scale(0.9) rotate(10deg)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0.5) rotate(-10deg)', offset: 1 })
          ])
        )
      ])
    ])

  ]
})
export class AddAppointmentComponent {

}
