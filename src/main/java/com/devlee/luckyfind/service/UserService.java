package com.devlee.luckyfind.service;

import com.devlee.luckyfind.model.UserDto;

import java.util.List;

public interface UserService {

    List<UserDto> getAllUsers();

    UserDto createUser(UserDto userDto);
}
