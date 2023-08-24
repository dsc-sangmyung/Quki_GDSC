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
@NoArgsConstructor
@AllArgsConstructor
@Table(name="category")
@Entity
@Builder
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_id;
    @Column(name = "categoryName", nullable = false)
    private String categoryName;

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
    @Column(name = "category_date")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    private LocalDateTime createdAt;

    @OneToMany(
            targetEntity = StoreEntity.class,
            fetch = FetchType.LAZY,
            mappedBy = "categoryEntity"
           //, cascade = CascadeType.ALL
    )
    private List<StoreEntity> storeList ;
}