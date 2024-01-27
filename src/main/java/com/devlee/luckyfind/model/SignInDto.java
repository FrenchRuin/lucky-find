package com.devlee.luckyfind.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignInDto {

    private String username;
    private String password;

}
