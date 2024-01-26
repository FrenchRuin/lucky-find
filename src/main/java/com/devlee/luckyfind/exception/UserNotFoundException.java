package com.devlee.luckyfind.exception;

public class UserNotFoundException  extends RuntimeException {

    private String username;

    public UserNotFoundException(String username) {
        this.username = username;
    }

}
