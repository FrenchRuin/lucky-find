package com.devlee.luckyfind.model;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignUpDto {
    private String username;
    private String password;
    private String email;
}

