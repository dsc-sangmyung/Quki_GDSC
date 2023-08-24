import React from 'react';
import '../scss/components/PaymentMethods.scss';
import {MdOutlinePayment} from 'react-icons/md';
import kakao from '../assets/payment/kakao.png';
import toss from '../assets/payment/toss.png';
import naver from '../assets/payment/naver.png';
import payco from '../assets/payment/payco.png';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const PaymentMethods = ({ onSelectPayment }) => {
  const navigate = useNavigate();
  const handlePaymentSelection = (method) => {
    if (onSelectPayment) {
      onSelectPayment(method);
    }
  };

  return (
    <div>
      <div className="method-container"> 
      <div className='back-btn2' onClick = {()=>navigate(-1)}>
        <BiArrowBack/>뒤로가기
      </div>
        <div className="ptext">
          <p>결제수단 선택</p>
        </div>
        <div className="ptext1">
          <p>카드 결제</p>
        </div>
        <div className="ptext2">
          <p>간편 결제</p>
        </div>
      </div>
      <div className="card-methods">
        <button onClick={() => handlePaymentSelection('card')}>
          <MdOutlinePayment className="icon" size={150}  alt="card" />
          <p className="card-methods-text">카드 결제</p>
        </button>
      </div>
      <div className="payment-methods">
        <button onClick={() => handlePaymentSelection('kakao')}>
            <img src={kakao} alt="kakao" />
            <p className="payment-methods-text1">카카오페이</p>
        </button>
      </div>
      <div className="payment-methods2">
        <button onClick={() => handlePaymentSelection('toss')}>
            <img src={toss} alt="toss" />
            <p className="payment-methods-text2">토스페이</p>
        </button>
      </div>
      <div className="payment-methods3">
        <button onClick={() => handlePaymentSelection('naver')}>
            <img src={naver} alt="naver" />
            <p className="payment-methods-text3">네이버페이</p>
        </button>
      </div>
      <div className="payment-methods4">
        <button onClick={() => handlePaymentSelection('payco')}>
            <img src={payco} alt="payco" />
            <p className="payment-methods-text4">페이코</p>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;