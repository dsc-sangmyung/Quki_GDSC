package com.example.jpa_test.dto;


import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.entity.StoreEntity;
import com.example.jpa_test.entity.UserEntity;
import lombok.*;


public class QrCardDto {
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @Builder
    public static class Request{ //request(요청에 사용)
        private Long id;
        private String image;
        private String title;
        private String content;
        private Boolean isFavorite;
        private Integer price;
        private UserEntity user_id;
        private StoreEntity store_id;
        //private LocalDateTime createdAt;

        public QrCardEntity toEntity(){ //Dto -> Entity
            return QrCardEntity.builder()
                    .image(image)
                    .title(title)
                    .content(content)
                    .isFavorite(isFavorite)
                    .price(price)
                    .userEntity(user_id)
                    .storeEntity(store_id)
                    .build();
        }
    }


    @Getter
    public static class Response{
        private final Long id;
        private final String image;
        private final String title;
        private final String content;
        private final Boolean is_favorite;
        private final Integer price;
        private final String user_id;
        private final Long store_id;
        //private final LocalDateTime createdAt;

        public Response(QrCardEntity qrCardEntity){
            this.id = qrCardEntity.getQrCard_id();
            this.image = qrCardEntity.getImage();
            this.title = qrCardEntity.getTitle();
            this.content = qrCardEntity.getContent();
            this.is_favorite = qrCardEntity.getIsFavorite();
            this.price = qrCardEntity.getPrice();
            this.user_id = qrCardEntity.getUserEntity().getUser_id();
            this.store_id = qrCardEntity.getStoreEntity().getStore_id();
            //this.createdAt = qrCardEntity.getCreatedAt();
        }
    }



}