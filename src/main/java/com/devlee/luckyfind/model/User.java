package com.devlee.luckyfind.model;

import com.devlee.luckyfind.entity.UserEntity;
import lombok.*;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    private Long id;
    private String username;
    private String password;
    private String email;

    public User(UserEntity userEntity) {
        BeanUtils.copyProperties(userEntity, this);
    }

}
