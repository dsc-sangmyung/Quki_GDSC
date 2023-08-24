package com.example.jpa_test;

import com.example.jpa_test.dto.CategoryDto;
import com.example.jpa_test.dto.QrCardDto;
import com.example.jpa_test.dto.StoreDto;
import com.example.jpa_test.dto.UserDto;
import com.example.jpa_test.entity.CategoryEntity;
import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.entity.StoreEntity;
import com.example.jpa_test.entity.UserEntity;
import com.example.jpa_test.repository.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
public class StoreTest {

//    @Autowired
//    StoreRepository storeRepository;
//    @Autowired
//    CategoryRepository categoryRepository;
    @Autowired
    UserRepository userRepository;
//    @Autowired
//    QrCardRepository qrCardRepository;

    /**
     * 테스트를 한번 진행한 후 다음 테스트에 영향을 미치지 않도록 repository를 비우는 코드
     */
//    @After("")
//    public void cleanup(){
//        storeRepository.deleteAll();
//    }
//    @Test
//    @DisplayName("userAdd")
//    public void userAdd() {
//        UserDto.Request userDto1 = new UserDto.Request();
//        userDto1.setId("useridnum");
//        userDto1.setNickname("eee");
//        userDto1.setOauth_info("eee");
//        userRepository.save(userDto1.toEntity());
//        }

//
//        UserDto.Request userDto2 = new UserDto.Request();
//        userDto2.setId(222L);
//        userDto2.setNickname("bbb");
//        userDto2.setOauth_info("bbb");
//        userRepository.save(userDto2.toEntity());
//
//        UserDto.Request userDto3 = new UserDto.Request();
//        userDto3.setId(333L);
//        userDto3.setNickname("ddd");
//        userDto3.setOauth_info("ddd");
//        userRepository.save(userDto3.toEntity());
//
//        System.out.println(userDto3);
//    }
//
//    @Test
//    @DisplayName("Category_Test")
//    public void categoryTest() {
//        CategoryDto.Request categoryDto1 = new CategoryDto.Request(); //id 0부터 할당? 1부터 할당? id 자동 생성 어노테이션 빼버려서 오류남
//        categoryDto1.setCategoryName("cafe");
//        categoryRepository.save(categoryDto1.toEntity());
//
//        CategoryDto.Request categoryDto2 = new CategoryDto.Request();
//        categoryDto2.setCategoryName("hamburger");
//        categoryRepository.save(categoryDto2.toEntity());
//
//        CategoryDto.Request categoryDto3 = new CategoryDto.Request();
//        categoryDto3.setCategoryName("pizza");
//        categoryRepository.save(categoryDto3.toEntity());
//
//        CategoryDto.Request categoryDto4 = new CategoryDto.Request();
//        categoryDto4.setCategoryName("chicken");
//        categoryRepository.save(categoryDto4.toEntity());
//    }

//    @Test
//    @DisplayName("store_test")
//    public void storeTest() {
//        CategoryEntity categoryEntity1 = categoryRepository.findById(2L).orElse(null);
//
//        StoreDto.Request storeDto1 = new StoreDto.Request();
//        storeDto1.setId(0L);
//        storeDto1.setStoreName("Lotteria");
//        storeDto1.setCategory_id(categoryEntity1);
//        storeRepository.save(storeDto1.toEntity());
//
//        StoreDto.Request storeDto2 = new StoreDto.Request();
//        storeDto2.setId(1L);
//        storeDto2.setStoreName("McDonald's");
//        storeDto2.setCategory_id(categoryEntity1);
//        storeRepository.save(storeDto2.toEntity());
//
//        CategoryEntity categoryEntity2 = categoryRepository.findById(1L).orElse(null);
//        StoreDto.Request storeDto3 = new StoreDto.Request();
//        storeDto3.setId(2L);
//        storeDto3.setStoreName("Starbucks");
//        storeDto3.setCategory_id(categoryEntity2);
//        storeRepository.save(storeDto3.toEntity());
//
//        StoreDto.Request storeDto4 = new StoreDto.Request();
//        storeDto4.setId(3L);
//        storeDto4.setStoreName("Ediya");
//        storeDto4.setCategory_id(categoryEntity2);
//        storeRepository.save(storeDto4.toEntity());
//
//        CategoryEntity categoryEntity3 = categoryRepository.findById(4L).orElse(null);
//        StoreDto.Request storeDto5 = new StoreDto.Request();
//        storeDto5.setId(4L);
//        storeDto5.setStoreName("BBQ");
//        storeDto5.setCategory_id(categoryEntity3);
//        storeRepository.save(storeDto5.toEntity());
//
//        StoreDto.Request storeDto6 = new StoreDto.Request();
//        storeDto6.setId(5L);
//        storeDto6.setStoreName("BHC");
//        storeDto6.setCategory_id(categoryEntity3);
//        storeRepository.save(storeDto6.toEntity());
//    }
//
//    @Test
//    @DisplayName("findTrue")
//    public void findTrue() {
//        UserEntity userEntity = userRepository.findById(111L).orElse(null);
//        List<QrCardEntity> qrFavoriteList = qrCardRepository.findByIsFavoriteTrueAndUserEntity(userEntity);
//        List<QrCardDto.Response> fList = qrFavoriteList.stream().map(QrCardDto.Response::new).collect(Collectors.toList());
//        System.out.println(fList);
//    }
//
//    @Test
//    @DisplayName("newUser")
//    public void newUserSave() {
//        //UserDto.Request userDto
//        UserDto.Request userDto = new UserDto.Request();
//        userDto.setId(444L);
//        userDto.setNickname("ccc");
//        userDto.setOauth_info("ccc");
//        System.out.println("-------------------------");
//        System.out.println(userDto);
//        System.out.println(userDto.getId());
//        System.out.println("-------------------------");
//
//        UserEntity userEntity = userRepository.findById(userDto.getId()).orElse(null);
//        System.out.println(userEntity);
//        if (userEntity == null) {
//            UserEntity newUser = userRepository.save(userDto.toEntity());
//            System.out.println(newUser);
//        } else {
//            System.out.println("저장 안해");
//        }
//    }

//    @Test
//    @DisplayName("즐겨찾기")
//    public void favorite() {
//        String value = "y";
//        Long id = 1L;
//        QrCardEntity qrCardEntity = qrCardRepository.findById(id).orElse(null);
//        QrCardDto.Request qrDto = new QrCardDto.Request(); //바뀔 내용
//        qrDto.setId(qrCardEntity.getQrCard_id());
//        qrDto.setImage(qrCardEntity.getImage());
//        qrDto.setTitle(qrDto.getTitle());
//        qrDto.setContent(qrDto.getContent());
//        qrDto.setPrice(qrDto.getPrice());
//
//        if (value.equals("y")) {
//            qrDto.setIsFavorite(true); //업데이틀 할 내용 qrDto에 저장됨 -> 패치로 바꾸어 줘야됨
//            qrCardEntity.patch(qrDto.toEntity());
//            qrCardRepository.save(qrCardEntity);
//
//            System.out.println("true로 바뀜");
//        } else if (value.equals("n")) {
//            qrDto.setIsFavorite(false);
//            qrCardEntity.patch(qrDto.toEntity());
//            qrCardRepository.save(qrCardEntity);
//
//            System.out.println("false로 바뀜");
//
//        }
//    }

//    @Test
//    @DisplayName("qr_test")
//    public void qrTest2(){
//        UserEntity userEntity = userRepository.findById(111L).orElse(null);
//        List<QrCardEntity> userQrList = qrCardRepository.findByUserEntity(userEntity);
//        List<QrCardDto.Response> userQrDtoList = userQrList.stream().map(QrCardDto.Response::new).collect(Collectors.toList());
//
//        System.out.println("-------------------------");
//        System.out.println(userEntity);
//        System.out.println("-------------------------");
//        //System.out.println(userQrList);
//
//    }

//    @Test
//    @DisplayName("updateTest")
//    public void updateTest(){
//        //업데이트 할 내용
//        StoreEntity storeEntity = storeRepository.findById(1L).orElse(null);
//        UserEntity userEntity = userRepository.findById(111L).orElse(null);
//        QrCardDto.Request qrCardDto = new QrCardDto.Request();
//        qrCardDto.setId(3L);
//        qrCardDto.setImage("update");
//        qrCardDto.setTitle("update");
//        qrCardDto.setContent("update");
//        qrCardDto.setIsFavorite(true);
//        qrCardDto.setPrice(10000);
//        qrCardDto.setUser_id(userEntity);
//        qrCardDto.setStore_id(storeEntity);
//
//        QrCardEntity qr = qrCardDto.toEntity();
//        System.out.println(qrCardDto);
//        System.out.println(qr);
//        System.out.println("Dto:"+qrCardDto.getId());
//        //System.out.println("Entity:"+qr.getQrCard_id());
//
//        //변경할 곳
//        Long id = 3L;
//        QrCardEntity target = qrCardRepository.findById(id).orElse(null);
//        if(target == null || id != qrCardDto.getId()){ //수정할 대상이 비어있거나, qr자리 id를 찾을 수 없거나
//            System.out.println("null입니당");
//        }
//        target.patch(qr);
//        System.out.println("------------------------");
//        System.out.println(target);
//
//        qrCardRepository.save(target);
//
//
//        //qrCardRepository.save(qrCardDto.toEntity());
//
//    }
//
//    @Test
//    @DisplayName("qr_test")
//    public void qrTest1(){
//        StoreEntity storeEntity = storeRepository.findById(1L).orElse(null);
//        System.out.println("ㅎㅇㅎㅇㅎㅇ:" + storeEntity);
//
//        UserEntity userEntity = userRepository.findById(222L).orElse(null);
//        System.out.println(userEntity);
//
//        QrCardDto.Request qrCardDto = new QrCardDto.Request();
//        qrCardDto.setImage("image1");
//        qrCardDto.setTitle("title1");
//        qrCardDto.setContent("content1");
//        qrCardDto.setIsFavorite(false);
//        qrCardDto.setPrice(10000);
//        qrCardDto.setUser_id(userEntity);
//        qrCardDto.setStore_id(storeEntity);
//
//        qrCardRepository.save(qrCardDto.toEntity());
//        System.out.println("----------------------------------");
//        System.out.println(qrCardDto.toEntity());
//    }

}