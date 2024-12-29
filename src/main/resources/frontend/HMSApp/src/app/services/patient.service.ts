import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Patient } from "../patient/patient";

@Injectable({
    providedIn: 'root'
})
    export class PatientService {
        constructor(private httpClient:HttpClient){

        }

        private baseURL = "http://localhost:8080/patients/get";
        getPatientList():Observable<Patient[]>{



            return this.httpClient.get<Patient[]>(this.baseURL);
        }
    }
