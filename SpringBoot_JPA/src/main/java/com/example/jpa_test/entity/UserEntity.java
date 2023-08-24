package com.example.jpa_test.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user")
@Entity
@Builder
public class UserEntity {
    @Id
    private String user_id;
    @Column(name = "nickname", nullable = false)
    private String nickname;

    @Column(name = "oauth_info", nullable = false)
    private String oauth_info;

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "user_date")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    private LocalDateTime createdAt; //= LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));

    @OneToMany(
            targetEntity = QrCardEntity.class,
            fetch = FetchType.LAZY,
            mappedBy = "userEntity"
            //, cascade = CascadeType.ALL
    )
    private List<QrCardEntity> qrCardList ;


//    @OneToMany(
//            targetEntity = PostEntity.class,
//            fetch = FetchType.LAZY,
//            mappedBy = "userEntity",
//            cascade = CascadeType.ALL
//    )
//    private List<PostEntity> postList = new ArrayList<>();

}