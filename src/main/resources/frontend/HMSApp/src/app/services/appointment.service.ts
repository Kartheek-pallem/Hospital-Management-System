import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointment } from "../appointment/appointment.component";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppointmentService{
    constructor(private httpClient:HttpClient){

    }

    private baseURL = "http://localhost:8080/appointment/";
    getAppointmentsList(){
        return this.httpClient.get<Appointment[]>(this.baseURL+"get");
    }

    addAppointments(body: Appointment): Observable<Appointment>{
        return this.httpClient.post<Appointment>(`${this.baseURL}add`, body);
    }

}