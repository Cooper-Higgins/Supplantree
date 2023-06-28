package com.codeclan.treeservice.controllers;

import com.codeclan.treeservice.models.User;
import com.codeclan.treeservice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value="/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/users/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping(value="/users/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User updatedUser, @PathVariable Long id){
        User existingUser = userRepository.findById(id).get();

        existingUser.setName(updatedUser.getName());
        existingUser.setEmailAddress(updatedUser.getEmailAddress());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setTrees(updatedUser.getTrees());

        userRepository.save(existingUser);

        return new ResponseEntity<>(existingUser, HttpStatus.OK);
    }
}
