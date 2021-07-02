package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.persistence.Entity;

import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@NoArgsConstructor
@Entity
@Table(name = "user")
@JsonIgnoreProperties(value = {"handler", "hibernateLazyInitializer", "fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "user_id")
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = IDENTITY)
    private int userId;

    @Basic
    @Column(name = "username")
    private String username;

    @Basic
    @Column(name = "password")
    private String password;

    @Basic
    @Column(name = "email")
    private String email;

    public User(String name,String password,String email){
        this.username = name;
        this.password = password;
        this.email =email;
    }
}
