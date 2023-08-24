package com.example.jpa_test.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="store")
@Entity
@Builder
public class StoreEntity {
    @Id
    private Long store_id;

    @Column(name="storeName")
    private String storeName;

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "store_date")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    private LocalDateTime createdAt;

    @ManyToOne(
            targetEntity = CategoryEntity.class,
            fetch = FetchType.LAZY
           //, cascade = CascadeType.ALL
    )
    @JoinColumn(name = "store_category_id")
    private CategoryEntity categoryEntity;

    @OneToMany(
            targetEntity = QrCardEntity.class,
            fetch = FetchType.LAZY,
            mappedBy = "storeEntity"
            //, cascade = CascadeType.ALL
    )
    private List<QrCardEntity> qrCardList ;
}
