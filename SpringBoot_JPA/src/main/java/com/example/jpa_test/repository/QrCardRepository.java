package com.example.jpa_test.repository;


import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.entity.StoreEntity;
import com.example.jpa_test.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QrCardRepository extends JpaRepository<QrCardEntity, Long> {
    List<QrCardEntity> findByUserEntity(UserEntity userId);

    List<QrCardEntity> findByTitle(String title);
    List<QrCardEntity> findByStoreEntity(StoreEntity storeId);
    List<QrCardEntity> findByIsFavoriteTrueAndUserEntity(UserEntity userId);

    List<QrCardEntity> findByTitleOrStoreEntity(String title, StoreEntity storeId);
}