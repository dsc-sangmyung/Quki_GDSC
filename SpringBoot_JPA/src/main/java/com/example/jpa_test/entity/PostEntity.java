package com.example.jpa_test.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="post")
@Entity
@Builder
public class PostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_id;

    @Column(name="likelike")
    private int likeLike;

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "post_date")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    private LocalDateTime createdAt;

//    @ManyToOne(
//            targetEntity = UserEntity.class,
//            fetch = FetchType.LAZY,
//            cascade = CascadeType.ALL
//    )
//    @JoinColumn(name = "user_id")
//    private UserEntity userEntity;

//    @OneToOne//(fetch = FetchType.LAZY, cascade = CascadeType.ALL)//(fetch = FetchType.LAZY, cascade = CascadeType.ALL)//post에 QrCard_id필드가 들어가니까 여기가 주인
//    @JoinColumn(name = "qrCard_id")
//    private QrCardEntity qrCardEntity;
}
