package com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    @Column(name="name")
    private String name;
    @Column(name="age")
    private String age;
    @Column(name="symptoms")
    private String symptyoms;
    @Column(name="number")
    private int number;


    public Appointment(long id, String name, String age, String symptyoms, int number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.symptyoms = symptyoms;
        this.number = number;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSymptyoms() {
        return symptyoms;
    }

    public void setSymptyoms(String symptyoms) {
        this.symptyoms = symptyoms;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
