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
        const url = new URL(this.baseURL+'add');
        return this.httpClient.post<Appointment>(url.toString(), body);
    }
    deleteAppointment(id: number): Observable<any> {
        const url = new URL(this.baseURL+'delete/'+id);
        console.log(url);
        return this.httpClient.delete<any>(url.toString());
    }
    
}