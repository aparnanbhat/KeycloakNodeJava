package com.JavaBackend.JavaBackend.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long user_id;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "email_id")
    private String email_id;

    @Column(name = "phone_no")
    private Long phone_no;
}
