package com.devlee.luckyfind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class LuckyFindApplication {

    public static void main(String[] args) {
        SpringApplication.run(LuckyFindApplication.class, args);
    }

}
