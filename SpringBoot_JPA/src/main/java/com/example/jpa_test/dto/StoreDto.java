package com.example.jpa_test.dto;

import com.example.jpa_test.entity.CategoryEntity;
import com.example.jpa_test.entity.StoreEntity;
import lombok.*;
import org.apache.catalina.Store;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class StoreDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    @Builder
    public static class Request{
        private Long id;
        private String storeName;
        private CategoryEntity category_id; //엔티티 객체
        //private LocalDateTime createdAt;

        public StoreEntity toEntity(){
            return StoreEntity.builder()
                    .store_id(id)
                    .storeName(storeName)
                    .categoryEntity(category_id) //엔티티 객체
                    .build();
        }
    }

    @Getter
    public static class Response{
        private final Long id;
        private final String storeName;
        private final Long category_id; //엔티티 객체
        private final List<QrCardDto.Response> qrCardList;
        //private final LocalDateTime createdAt;

        public Response(StoreEntity storeEntity){
            this.id = storeEntity.getStore_id();
            this.storeName = storeEntity.getStoreName();
            this.category_id = storeEntity.getCategoryEntity().getCategory_id();
            this.qrCardList = storeEntity.getQrCardList().stream().map(QrCardDto.Response::new).collect(Collectors.toList());
            //this.createdAt = storeEntity.getCreatedAt();
        }
    }


}


