package com.example.demo.Dao;

import com.example.demo.Entity.User;

public interface UserDao {
    User findByUsername(String username);
    User findByEmail(String email);

    User saveUser(User user);
}
