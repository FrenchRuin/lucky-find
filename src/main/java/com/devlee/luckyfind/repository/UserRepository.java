package com.devlee.luckyfind.repository;

import com.devlee.luckyfind.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query("select u from UserEntity u where u.username = :username")
    Optional<UserEntity> findByUsername(String username);
}
