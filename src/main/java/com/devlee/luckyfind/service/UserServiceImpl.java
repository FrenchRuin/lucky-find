package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.UserEntity;
import com.devlee.luckyfind.exception.UserAlreadyExistException;
import com.devlee.luckyfind.model.UserDto;
import com.devlee.luckyfind.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream().map(UserDto::new).toList();
    }

    @Override
    public UserDto createUser(UserDto userDto) {

        userRepository.findByUsername(userDto.getUsername()).ifPresent(userEntity -> {
            throw new UserAlreadyExistException(userDto.getUsername() + "는 이미 존재하는 사용자입니다.");
        });

        UserEntity newUser = UserEntity.builder()
                .id(userDto.getId())
                .email(userDto.getEmail())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .build();
        userRepository.save(newUser);

        return userDto;
    }
}
