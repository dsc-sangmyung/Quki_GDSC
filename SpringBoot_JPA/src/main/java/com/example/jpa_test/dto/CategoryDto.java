package com.example.jpa_test.dto;


import com.example.jpa_test.entity.CategoryEntity;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;


public class CategoryDto {
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @Builder
    public static class Request{
        private Long id;
        private String categoryName;
        //private LocalDateTime createdAt;

        public CategoryEntity toEntity(){
            return CategoryEntity.builder()
                    .categoryName(categoryName)
                    .build();
        }
    }

    @Getter
    public static class Response{
        private final Long id;
        private final String categoryName;
        private final List<StoreDto.Response> storeList;
        //private LocalDateTime createdAt;

        public Response(CategoryEntity categoryEntity){
            this.id = categoryEntity.getCategory_id();
            this.categoryName = categoryEntity.getCategoryName();
            this.storeList = categoryEntity.getStoreList().stream().map(StoreDto.Response::new).collect(Collectors.toList());
            //this.createdAt = categoryEntity.getCreatedAt();
        }
    }

}
