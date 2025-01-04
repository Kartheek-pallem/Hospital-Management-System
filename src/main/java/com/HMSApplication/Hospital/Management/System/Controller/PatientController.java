package com.HMSApplication.Hospital.Management.System.Controller;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Appointment;
import com.HMSApplication.Hospital.Management.System.Entity.Patient;
import com.HMSApplication.Hospital.Management.System.Repository.PatientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/patients")
public class PatientController {
    private PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @PostMapping("/insertPatients")
    public Patient createPatient(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }
    @GetMapping("/get")
    public List<Patient> getPatient() {
        return patientRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment (@PathVariable long id) {
        Optional<Patient> patient = patientRepository.findById(id);
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        if(!patient.isPresent()) {
            response.put("Deleted",Boolean.FALSE);
        }
        else {
            patientRepository.deleteById(id);
            response.put("Deleted", Boolean.TRUE);
        }
        return ResponseEntity.ok(response);
    }

}
