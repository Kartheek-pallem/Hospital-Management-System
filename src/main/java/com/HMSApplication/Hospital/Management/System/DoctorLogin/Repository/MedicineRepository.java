package com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository;

import com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
