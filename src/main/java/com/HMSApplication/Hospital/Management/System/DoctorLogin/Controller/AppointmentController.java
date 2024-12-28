package com.HMSApplication.Hospital.Management.System.DoctorLogin.Controller;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Appointment;
import com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository.AppointmentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    private AppointmentRepository appointmentRepository;

    @GetMapping("/get")
    public Appointment getAppointment(){
        return (Appointment) appointmentRepository.findAll();
    }
}
