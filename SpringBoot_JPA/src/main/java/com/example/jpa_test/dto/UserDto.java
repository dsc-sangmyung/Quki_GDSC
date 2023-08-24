package com.example.jpa_test.dto;

import com.example.jpa_test.entity.StoreEntity;
import com.example.jpa_test.entity.UserEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class UserDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    @Builder
    public static class Request{
        private String id;
        private String nickname;
        private String oauth_info;
        //private LocalDateTime createdAt;

        public UserEntity toEntity() {
            return UserEntity.builder()
                    .user_id(id)
                    .nickname(nickname)
                    .oauth_info(oauth_info)
                    .build();
        }
    }

    @Getter
    public static class Response{
        private final String id;
        private final String nickname;
        private final String oauth_info;
        private final List<QrCardDto.Response> qrCardList;
        //private final LocalDateTime createdAt;

        public Response(UserEntity userEntity){
            this.id = userEntity.getUser_id();
            this.nickname = userEntity.getNickname();
            this.oauth_info = userEntity.getOauth_info();
            this.qrCardList = userEntity.getQrCardList().stream().map(QrCardDto.Response::new).collect(Collectors.toList());
            //this.createdAt = userEntity.getCreatedAt();
        }

    }


}
