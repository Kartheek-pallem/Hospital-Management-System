import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointment } from "../appointment/appointment.component";

@Injectable({
    providedIn: 'root'
})

export class AppointmentService{
    constructor(private httpClient:HttpClient){

    }

    private baseURL = "http://localhost:8080/appointment/get";
    getAppointmentsList(){
        return this.httpClient.get<Appointment[]>(this.baseURL);
    }

}