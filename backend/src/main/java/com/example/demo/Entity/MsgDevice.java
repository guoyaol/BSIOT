package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@NoArgsConstructor
@Entity
@Table(name = "msg_device")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class MsgDevice {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    @Basic
    @Column(name = "alert")
    private int alert;

    @Basic
    @Column(name = "clientid")
    private String clientId;

    @Basic
    @Column(name = "info")
    private String info;

    @Basic
    @Column(name = "lat")
    private double lat;

    @Basic
    @Column(name = "lng")
    private double lng;

    @Basic
    @Column(name = "timestamp")
    private double timestamp;

    @Basic
    @Column(name = "value")
    private int value;


}
