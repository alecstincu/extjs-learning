package com.goaltracker.controller;

import com.goaltracker.entity.User;
import com.goaltracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/user")
    int saveUser(@RequestBody User newUser) {
        return userRepository.insert(newUser);
    }

    @PutMapping("/user")
    int updateUser(@RequestBody User updatedUser) {
        return userRepository.update(updatedUser);
    }

    @DeleteMapping("/user/{id}")
    int deleteById(@PathVariable Long id) {
        return userRepository.deleteById(id);
    }
}
