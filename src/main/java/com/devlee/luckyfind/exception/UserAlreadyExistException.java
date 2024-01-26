package com.devlee.luckyfind.exception;

public class UserAlreadyExistException extends RuntimeException {

    public UserAlreadyExistException(String message) {
        super(message);
    }
}
