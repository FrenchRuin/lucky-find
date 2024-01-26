package com.devlee.luckyfind.controller;

import com.devlee.luckyfind.model.UserDto;
import com.devlee.luckyfind.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }


    @PostMapping("/users")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto user = userService.createUser(userDto);
        return ResponseEntity.ok(user);
    }
}
