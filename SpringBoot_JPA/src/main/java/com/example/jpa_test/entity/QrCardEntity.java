package com.example.jpa_test.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="qrcard")
@Entity
@Builder
public class QrCardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qrCard_id;

    @Column(name = "image")
    private String image;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name="price")
    private Integer price;

    @Column(name = "is_favorite")
    private Boolean isFavorite;

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "qr_date")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    private LocalDateTime createdAt;

    @ManyToOne(
            targetEntity = UserEntity.class,
            fetch = FetchType.LAZY
            //, cascade = CascadeType.ALL
    )
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @ManyToOne(
             targetEntity = StoreEntity.class,
             fetch = FetchType.LAZY
            //, cascade = CascadeType.ALL
    )
    @JoinColumn(name = "store_id")
    private StoreEntity storeEntity;

//    @OneToOne(mappedBy = "qrCardEntity")//, cascade = CascadeType.ALL, fetch = FetchType.LAZY)//, fetch = FetchType.LAZY, cascade = CascadeType.ALL
//    private PostEntity postEntity;

    public void patch(QrCardEntity qrCardEntity) {//(QrCardEntity qrCardEntity)인자 = 업데이트 할 내용
        if (qrCardEntity.image != null) { //입력값 즉 수정할 값이 null값, 비어있지 않으면 그걸로 대체해
            this.image = qrCardEntity.image;
        }
        if (qrCardEntity.title != null) {
            this.title = qrCardEntity.title;
        }
        if (qrCardEntity.content != null) {
            this.content = qrCardEntity.content;
        }
        if (qrCardEntity.isFavorite != null) {
            this.isFavorite = qrCardEntity.isFavorite;
        }
        if (qrCardEntity.price != null) {
            this.price = qrCardEntity.price;
        }

    }


}