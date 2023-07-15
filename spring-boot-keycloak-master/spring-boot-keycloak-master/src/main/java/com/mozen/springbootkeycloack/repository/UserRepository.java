package com.mozen.springbootkeycloack.repository;

import com.mozen.springbootkeycloack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
