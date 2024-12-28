package com.HMSApplication.Hospital.Management.System.DoctorLogin.Controller;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Medicine;
import com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository.MedicineRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/medicine")
public class MedicineController {
    private MedicineRepository medicineRepository;

    public Medicine getMedicine(){
        return (Medicine) medicineRepository.findAll();
    }
}
