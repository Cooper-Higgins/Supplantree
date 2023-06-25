package com.codeclan.treeservice.repositories;

import com.codeclan.treeservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
