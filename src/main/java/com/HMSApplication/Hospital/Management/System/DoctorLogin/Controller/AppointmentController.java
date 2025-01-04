package com.HMSApplication.Hospital.Management.System.DoctorLogin.Controller;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Appointment;
import com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository.AppointmentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment (@PathVariable long id) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        if(!appointment.isPresent()) {
            response.put("Deleted",Boolean.FALSE);
        }
        else {
            appointmentRepository.deleteById(id);
            response.put("Deleted", Boolean.TRUE);
        }
        return ResponseEntity.ok(response);
    }

}

