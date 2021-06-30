package com.example.demo.Controller;

import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Principal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin()
@RestController
@EnableAutoConfiguration
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/register")
    public int Register(
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email){
        return userService.Register(username,password,email);
    }

    @PostMapping(value = "/checklogin")
    public Map<String,Object> checkLogin(Principal principal){
        Map<String,Object> map = new HashMap<>();

        map.put("code",200);
        map.put("message","已登录");

        return map;
    }

}
