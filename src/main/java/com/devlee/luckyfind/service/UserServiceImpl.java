package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.UserEntity;
import com.devlee.luckyfind.model.User;
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
    public List<User> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream().map(User::entityToDto).toList();
    }
}
