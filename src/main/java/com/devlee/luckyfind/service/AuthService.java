package com.devlee.luckyfind.service;

import com.devlee.luckyfind.model.SignInDto;
import com.devlee.luckyfind.model.SignUpDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

public interface AuthService {
    SignUpDto signUp(SignUpDto signUpDto);

    SignInDto login(SignInDto signInDto);
}
