package com.HMSApplication.Hospital.Management.System.DoctorLogin.Controller;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Appointment;
import com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    private final AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @GetMapping("/get")
    public List<Appointment> getAppointments(){
        return appointmentRepository.findAll();
    }

    @PostMapping("/add")
    public void addAppointments(@RequestBody Appointment appointment){
        appointmentRepository.save(appointment);
    }

}
