package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.UserEntity;
import com.devlee.luckyfind.exception.UserAlreadyExistException;
import com.devlee.luckyfind.model.SignInDto;
import com.devlee.luckyfind.model.SignUpDto;
import com.devlee.luckyfind.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public SignUpDto signUp(SignUpDto signUpDto) {

        System.out.println(signUpDto.toString());
        userRepository.findByUsername(signUpDto.getUsername()).ifPresent(a -> {
            throw new UserAlreadyExistException("이미 존재하는 유저입니다.");
        });

        UserEntity user = UserEntity.builder()
                .password(signUpDto.getPassword())
                .username(signUpDto.getUsername())
                .email(signUpDto.getEmail())
                .build();

        userRepository.save(user);

        return signUpDto;
    }

    @Override
    public SignInDto login(SignInDto signInDto) {

        UserEntity user = userRepository.findByUsername(signInDto.getUsername())
                .orElseThrow(() -> new IllegalStateException("유저가 존재하지 않습니다."));

        if (!user.getPassword().equals(signInDto.getPassword())) {
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }

        return signInDto;
    }
}
