package com.HMSApplication.Hospital.Management.System.Repository;

import com.HMSApplication.Hospital.Management.System.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {



}
