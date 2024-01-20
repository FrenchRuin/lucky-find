package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.UserEntity;
import com.devlee.luckyfind.model.User;
import com.devlee.luckyfind.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        List<UserEntity> userEntity = userRepository.findAll();
        return userEntity.stream().map(User::new).toList();
    }
}
