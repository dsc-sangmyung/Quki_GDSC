package com.example.jpa_test.dto;


import com.example.jpa_test.entity.PostEntity;
import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.entity.UserEntity;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class PostDto {
    private Long id;
    private Integer likeLike;
    private UserEntity user_id;
    private QrCardEntity qrCard_id;
    //private LocalDateTime createdAt;

    //@Builder
    public void toDto(PostEntity postEntity){
        this.id = postEntity.getPost_id();
        this.likeLike = postEntity.getLikeLike();
//        this.user_id = postEntity.getUserEntity();
//        this.qrCard_id = postEntity.getQrCardEntity();
        //this.createdAt = postEntity.getCreatedAt();
    }
    //private final List<ComentDto.Response> coments
    // this.comments = posts.getComments().stream().map(CommentDto.Response::new).collect(Collectors.toList());
    // this.comments = posts.getComments().stream().map(CommentDto.Response::new).collect(Collectors.toList());
    public PostEntity toEntity(){
        return PostEntity.builder()
                .likeLike(likeLike)
                //.userEntity(user_id)
                //.qrCardEntity(qrCard_id)
                .build();
    }
}
