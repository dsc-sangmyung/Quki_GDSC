package com.example.jpa_test.repository;

import com.example.jpa_test.entity.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StoreRepository extends JpaRepository<StoreEntity, Long> {
    StoreEntity findByStoreName(String storeName);
}
