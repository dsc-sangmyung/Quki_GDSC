import React from 'react';
import '../scss/components/Advice2.scss';
import cardinput from '../assets/payment/cardinput.png';

const Advice1 = () => {
    return (
        <div className="advice-container2">
            <div className="ad-text3">
                <p>결제 중입니다.</p>
            </div>
            <div className="ad-text4">
                <p>결제가 완전히 끝날 때까지<br/>카드를 뽑지마세요!</p>
            </div>
            <div className="ad-img2">
                <img src={cardinput} alt="cardinput"/>
            </div>
        </div>
    );
};

export default Advice1;