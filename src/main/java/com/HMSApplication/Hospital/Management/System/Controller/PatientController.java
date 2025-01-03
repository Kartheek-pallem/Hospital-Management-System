package com.HMSApplication.Hospital.Management.System.Controller;

import com.HMSApplication.Hospital.Management.System.Entity.Patient;
import com.HMSApplication.Hospital.Management.System.Repository.PatientRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
