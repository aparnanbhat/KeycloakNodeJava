package com.JavaBackend.JavaBackend.repository;

import com.JavaBackend.JavaBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
