package com.example.jpa_test.controller;

import com.example.jpa_test.dto.CategoryDto;
import com.example.jpa_test.dto.QrCardDto;
import com.example.jpa_test.dto.StoreDto;
import com.example.jpa_test.entity.CategoryEntity;
import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.repository.CategoryRepository;
import com.example.jpa_test.repository.StoreRepository;
import com.example.jpa_test.service.QrService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/qr")
public class QrController {
    private final QrService qrService; //@Autowired 사용 지양됨 -> @RequiredArgsConstructor 로 생성되는 생성자로 주입받기 위해 final 붙임.

    private final CategoryRepository categoryRepository;
    private final StoreRepository storeRepository;

    @PostMapping("/startdata")
    public void startData(){
        CategoryDto.Request categoryDto1 = new CategoryDto.Request();
        categoryDto1.setCategoryName("카페");
        categoryRepository.save(categoryDto1.toEntity());

        CategoryDto.Request categoryDto2 = new CategoryDto.Request();
        categoryDto2.setCategoryName("패스트푸드");
        categoryRepository.save(categoryDto2.toEntity());

        CategoryDto.Request categoryDto3 = new CategoryDto.Request();
        categoryDto3.setCategoryName("한식");
        categoryRepository.save(categoryDto3.toEntity());

        CategoryDto.Request categoryDto4 = new CategoryDto.Request();
        categoryDto4.setCategoryName("일식");
        categoryRepository.save(categoryDto4.toEntity());

        CategoryDto.Request categoryDto5 = new CategoryDto.Request();
        categoryDto5.setCategoryName("중식");
        categoryRepository.save(categoryDto5.toEntity());

        CategoryEntity categoryEntity1 = categoryRepository.findById(1L).orElse(null);
        StoreDto.Request storeDto1 = new StoreDto.Request();
        storeDto1.setId(0L);
        storeDto1.setStoreName("메가 커피");
        storeDto1.setCategory_id(categoryEntity1);
        storeRepository.save(storeDto1.toEntity());

        StoreDto.Request storeDto2 = new StoreDto.Request();
        storeDto2.setId(1L);
        storeDto2.setStoreName("공차");
        storeDto2.setCategory_id(categoryEntity1);
        storeRepository.save(storeDto2.toEntity());


        CategoryEntity categoryEntity2 = categoryRepository.findById(2L).orElse(null);
        StoreDto.Request storeDto3 = new StoreDto.Request();
        storeDto3.setId(2L);
        storeDto3.setStoreName("KFC");
        storeDto3.setCategory_id(categoryEntity2);
        storeRepository.save(storeDto3.toEntity());


        StoreDto.Request storeDto4 = new StoreDto.Request();
        storeDto4.setId(3L);
        storeDto4.setStoreName("버거킹");
        storeDto4.setCategory_id(categoryEntity2);
        storeRepository.save(storeDto4.toEntity());

        StoreDto.Request storeDto5 = new StoreDto.Request();
        storeDto5.setId(4L);
        storeDto5.setStoreName("롯데리아");
        storeDto5.setCategory_id(categoryEntity2);
        storeRepository.save(storeDto5.toEntity());
    }
    //본인이 만든 qr다가지고 오기
    @GetMapping("list/{userId}") //json으로 들어올듯?
    public List<QrCardDto.Response> readQrList(@PathVariable String userId){
        return qrService.readQrList(userId);
    }

    //특정 qr눌렀을때
    @GetMapping("read/{id}")
    public ResponseEntity readQr(@PathVariable Long id){
        return ResponseEntity.ok(qrService.readQr(id));
    }

    //qr저장
    @PostMapping("save/{userId}")
    public ResponseEntity saveQr(@RequestBody QrCardDto.Request qrDto, @PathVariable String userId){
        QrCardEntity saved = qrService.saveQr(qrDto, userId);

        return (saved != null) ? ResponseEntity.status(HttpStatus.OK).body(saved.getQrCard_id()) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    //qr삭제
    @DeleteMapping("delete/{id}")
    public ResponseEntity deleteQr(@PathVariable Long id){
        QrCardEntity target = qrService.deleteQr(id);
        return (target != null) ? ResponseEntity.status(HttpStatus.OK).build() : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //업데이트
    @PatchMapping("update/{id}") //사용자가 요청이 들어와야돼 client요청을 Dto 형식으로 들어와 이걸가지고 service에서 entity로 바꿔서 repository에 저장해야됨
    public ResponseEntity updateQr(@PathVariable Long id, @RequestBody QrCardDto.Request qrDto){
        QrCardEntity updated = qrService.updateQr(id, qrDto); //qrDto 없데이트 할 내용
        return (updated != null) ? ResponseEntity.status(HttpStatus.OK).body(updated.getQrCard_id()) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    //검색
    @GetMapping("/search/{value}") //반환 Entity 조회랑 비슷할 거 같은데 //키워드를 받아와야되는데
    public List<QrCardDto.Response> searchQr(@PathVariable String value){ //반환형 리스트 일듯 리스트 Dto인지 Entity인지는 고민해 볼 필요가 있을듯

        return qrService.searchQr(value);
    }

    //즐겨찾기
    @PatchMapping("favorite/{id}/{value}")
    public ResponseEntity favoriteList(@PathVariable Long id, @PathVariable String value){ //value y=ture n=false
        Boolean favorite =  qrService.favoriteList(id,value);
        Map<String, Boolean> result = new HashMap<>();
        result.put("status", favorite);
        return ResponseEntity.ok(result);
    }
}