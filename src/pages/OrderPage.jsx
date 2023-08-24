import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCoffeeTogo, BiQr, BiArrowBack } from "react-icons/bi";
import '../scss/pages/OrderPage.scss';

const OrderPage = ({receipt, setReceipt}) => {
    const navigate = useNavigate();

    const onBtnClick = (e) => {
        e.currentTarget.name === 'Basic' ? receipt.type = 'Basic' : receipt.type = 'QR';
        console.log(e.currentTarget.name);
        receipt.type === 'Basic' ? navigate('/menu') : navigate('/reader');
        console.log(receipt);
    }

    return (
        <div className='OrderPage_Container'>
            <div className='OrderPage_Back' onClick = {() =>{navigate('/'); window.location.reload();}}>
                <BiArrowBack/>뒤로가기
            </div>
            <div className='OrderPage_Wrapper'>
                <button className='OrderPage_Btn' name='Basic' onClick={onBtnClick}>
                    <div name='Basic'>
                        <BiCoffeeTogo size={350} />
                    </div>
                    일반 주문
                </button>
            </div>
            <div className='OrderPage_Wrapper' style={{background:'burlywood'}}>
                <button className='OrderPage_Btn' name='QR' onClick={onBtnClick}>
                    <div name='QR'>
                        <BiQr size={350} />
                    </div>
                    QR 주문
                </button>
            </div>
        </div>
    );
};

export default OrderPage;