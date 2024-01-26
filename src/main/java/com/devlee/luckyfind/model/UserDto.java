package com.devlee.luckyfind.model;

import com.devlee.luckyfind.entity.UserEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {

    private Long id;
    private String username;
    private String password;
    private String email;

    public UserDto(UserEntity userEntity) {
        this.email = userEntity.getEmail();
        this.id = userEntity.getId();
        this.password = userEntity.getPassword();
        this.username = userEntity.getUsername();
    }
}
