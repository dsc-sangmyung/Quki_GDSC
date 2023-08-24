package com.example.jpa_test.controller;

import com.example.jpa_test.dto.UserDto;
import com.example.jpa_test.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    //로그인 dto가 들어오면 로그인 되게
    private final UserService userservice;

    @GetMapping("/test")
    public String useTest(){
        return "test";
    }

    //로그인
    @GetMapping("/login/{userId}")
    public ResponseEntity userLogin(@PathVariable String userId){
        Boolean userResult = userservice.userLogin(userId);
        Map<String, Boolean> result = new HashMap<>();
        result.put("status", userResult);
        return ResponseEntity.ok(result);
    }

    //회원가입
    @PostMapping("/register")
    public ResponseEntity newUser(@RequestBody UserDto.Request userDto){
        Boolean newUser = userservice.newUser(userDto);
        Map<String, Boolean> result = new HashMap<>();
        result.put("status", newUser);
        return ResponseEntity.ok(result);
    }

    //탙퇴(유저 삭제)
    @DeleteMapping("/delete")
    public ResponseEntity userDelete(@RequestBody UserDto.Request userDto){
        Boolean userResult = userservice.userDelete(userDto);
        Map<String, Boolean> result = new HashMap<>();
        result.put("status", userResult);
        return ResponseEntity.ok(result);
    }
}
