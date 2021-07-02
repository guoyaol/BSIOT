package com.example.demo.ServiceImpl;

import com.example.demo.Dao.UserDao;
import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;

    @Override
    public int Register(String username,String password,String email){
        User user = userDao.findByUsername(username);
        User user2 = userDao.findByEmail(email);
        if(user==null && user2==null)
        {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

            User newUser = new User();
            newUser.setUsername(username);
            newUser.setPassword(encoder.encode(password));
            newUser.setEmail(email);
            return  userDao.saveUser(newUser).getUserId();
        }
        else{
            return 0;
        }
    }
}
