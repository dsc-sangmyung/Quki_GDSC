package com.example.jpa_test.service;

import com.example.jpa_test.dto.QrCardDto;
import com.example.jpa_test.entity.QrCardEntity;
import com.example.jpa_test.entity.StoreEntity;
import com.example.jpa_test.entity.UserEntity;
import com.example.jpa_test.repository.QrCardRepository;
import com.example.jpa_test.repository.StoreRepository;
import com.example.jpa_test.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class QrService {
    private final QrCardRepository qrCardRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;

    @Transactional
    public List<QrCardDto.Response> readQrList(String userId) {
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        List<QrCardEntity> userQrList = qrCardRepository.findByUserEntity(userEntity);

        List<QrCardDto.Response> userQrDtoList = userQrList.stream().map(QrCardDto.Response::new).collect(Collectors.toList());

        return userQrDtoList;
    }

    @Transactional
    public QrCardDto.Response readQr(Long id){
        QrCardEntity qrCardEntity = qrCardRepository.findById(id).orElse(null);
        return new QrCardDto.Response(qrCardEntity);
    }

    //qr저장 ->save는 DB에 저장되는 것이니까 반환형은 Entity여야되는거지
    @Transactional
    public QrCardEntity saveQr(QrCardDto.Request qrDto, String userId) { //사용자에게 dto로 입력이 들어와(아닌가 값이 하나씩 들어오나? 아니다 @RequestBody로 들어오니까 객체로 들어와 그러니까 dto가 맞지)
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        qrDto.setUser_id(userEntity);
        //qrDto에 엔티티가 들어와.getStore_id()하면 Store_id는  엔티티니까 엔티티가 반환돼

        QrCardEntity qrCardEntity = qrDto.toEntity();

        return qrCardRepository.save(qrCardEntity);
    }
    @Transactional
    public QrCardEntity deleteQr(Long id){
        QrCardEntity target = qrCardRepository.findById(id).orElse(null);
        if(target == null){
            return null;
        }
        qrCardRepository.delete(target);
        return target;
    }
    @Transactional
    public QrCardEntity updateQr(Long id, QrCardDto.Request qrDto){
        qrDto.setId(id);
        QrCardEntity qr = qrDto.toEntity(); //업데이트 할 내용

        QrCardEntity target = qrCardRepository.findById(id).orElse(null); //업데이트 하기전 qr
        if(target == null || id != qrDto.getId()){ //수정할 대상이 비어있거나, qr자리 id를 찾을 수 없거나
            return null;
        }
        target.patch(qr);
        QrCardEntity update = qrCardRepository.save(target);

        return update;
    }

    //검색
    @Transactional
    public List<QrCardDto.Response> searchQr(String value){
        //검색어(value)가 title일 경우
        List<QrCardEntity> qrSearchList = qrCardRepository.findByTitle(value);
        //검색어(value)가 가게명(store_name)인경우
        StoreEntity storeNameEntity = storeRepository.findByStoreName(value);
        List<QrCardEntity> storeQrList = qrCardRepository.findByStoreEntity(storeNameEntity);

        for(QrCardEntity storeQr : storeQrList){
            qrSearchList.add(storeQr);
        } //두 경우 모두 qrsearchList에 저장함

        return qrSearchList.stream().map(QrCardDto.Response::new).collect(Collectors.toList());
    }

    @Transactional
    public Boolean favoriteList( Long id, String value){ //value y=ture n=false
        //먼저 유저 정보
        QrCardEntity qrCardEntity = qrCardRepository.findById(id).orElse(null);
        QrCardDto.Request qrDto = new QrCardDto.Request();
        qrDto.setId(qrCardEntity.getQrCard_id());
        qrDto.setImage(qrCardEntity.getImage());
        qrDto.setTitle(qrDto.getTitle());
        qrDto.setContent(qrDto.getContent());
        qrDto.setPrice(qrDto.getPrice());

        if(value.equals("y")){
            qrDto.setIsFavorite(true); //업데이틀 할 내용 qrDto에 저장됨 -> 패치로 바꾸어 줘야됨
            qrCardEntity.patch(qrDto.toEntity());
            qrCardRepository.save(qrCardEntity);
            return true;
        }
        else if(value.equals("n")){
            qrDto.setIsFavorite(false);
            qrCardEntity.patch(qrDto.toEntity());
            qrCardRepository.save(qrCardEntity);
            return false;
        }
        return null;
    }

}