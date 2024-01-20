package com.devlee.luckyfind.entity;

import jakarta.persistence.*;
import lombok.Getter;


@Getter
@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
}
