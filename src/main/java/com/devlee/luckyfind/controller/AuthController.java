package com.devlee.luckyfind.controller;

import com.devlee.luckyfind.model.SignInDto;
import com.devlee.luckyfind.model.SignUpDto;
import com.devlee.luckyfind.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/signup")
    public ResponseEntity<SignUpDto> signUp(@RequestBody SignUpDto signUpDto) {
        SignUpDto user = authService.signUp(signUpDto);
        return ResponseEntity.ok(user);
    }


    @PostMapping("/login")
    public ResponseEntity<SignInDto> login(@RequestBody SignInDto signInDto) {
        SignInDto user = authService.login(signInDto);
        return ResponseEntity.ok(user);
    }
}
