import React from 'react';
import '../scss/components/Advice1.scss';
import cardinput from '../assets/payment/cardinput.png';

const Advice1 = () => {
    return (
        <div className="advice-container">
            <div className="ad-text1">
                <p>카드를 넣어주세요.</p>
            </div>
            <div className="ad-text2">
                <p>카드를 그림과 같이<br/>투입구에 넣어주세요.</p>
            </div>
            <div className="ad-img">
                <img src={cardinput} alt="cardinput"/>
            </div>
        </div>
    );
};

export default Advice1;