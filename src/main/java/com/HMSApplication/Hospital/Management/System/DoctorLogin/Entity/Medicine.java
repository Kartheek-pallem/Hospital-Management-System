package com.HMSApplication.Hospital.Management.System.DoctorLogin.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="medicines")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="drug_name")
    private String drugName;

    private int stock;

    public Medicine(long id, String drugName, int stock) {
        this.id = id;
        this.drugName = drugName;
        this.stock = stock;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
