import React from 'react';
import PaymentMethods from '../components/PaymentMethods';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {

  const navigate = useNavigate();

  const handlePaymentSelection = (method) => {
    if (method === 'card') {
      navigate('/advice'); // 카드 결제를 선택한 경우 PointPage로 이동
    } else {
      // 다른 결제 수단을 선택한 경우의 로직
    }
  };

  return (
    <div>
      <PaymentMethods onSelectPayment={handlePaymentSelection} />
    </div>
  );
};

export default PaymentPage;

