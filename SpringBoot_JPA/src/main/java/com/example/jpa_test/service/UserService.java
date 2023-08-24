package com.example.jpa_test.service;


import com.example.jpa_test.dto.UserDto;
import com.example.jpa_test.entity.UserEntity;
import com.example.jpa_test.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public Boolean userLogin(String userId){
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        if(userEntity != null){ //로그인 성공
            return true;
        }
        return false;
    }

    public Boolean newUser(UserDto.Request userDto){ //회원
//        UserEntity userEntity = userRepository.findById(userDto.getId()).orElse(null);
//        if(userEntity != null) {
//            return null;
//        }
//        UserEntity newUser = userRepository.save(userDto.toEntity());
//        return newUser;

        UserEntity userEntity = userRepository.findById(userDto.getId()).orElse(null);
        if(userEntity != null) { //유저를 찾음 -> 회원가입x
            return false;
        }
        //유저를 찾을 수 없음 -> 회원 가입진행
        UserEntity newUser = userRepository.save(userDto.toEntity());
        return true;
    }

    public Boolean userDelete(UserDto.Request userDto){
        UserEntity userEntity = userRepository.findById(userDto.getId()).orElse(null);
        if(userEntity != null){ //탈퇴 성공
            userRepository.delete(userDto.toEntity());
            return true;
        }
        return false; //탈퇴 실패
    }
}
