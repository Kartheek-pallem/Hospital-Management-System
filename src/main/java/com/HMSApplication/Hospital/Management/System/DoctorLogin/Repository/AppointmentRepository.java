package com.HMSApplication.Hospital.Management.System.DoctorLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentRepository, Long> {
}
