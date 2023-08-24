import React from 'react';
import '../scss/pages/IntroPage.scss';
import Intro from '../assets/etc/Intro.jpeg';
import Event from '../assets/etc/Event.jpeg';
import Event2 from '../assets/etc/Event2.png';
import Event3 from '../assets/etc/Event3.jpeg';
import { useNavigate } from 'react-router-dom';

const IntroPage = ({receipt, setReceipt, cart, setCart}) => {

    const navigate = useNavigate();

    const onBtnClick = (e) => {
        navigate('/order');
        e.target.name === "매장" ? receipt.order = "offline" : receipt.order = "takeout";
        console.log(e.target.name);
        console.log(receipt);
    }

    return (
        <div className='IntroPage_Container'>
            {/* Image Slide (Auto Animated) */}
            <div id = 'slider'>
                <figure>
                    <img src={Intro} alt=''/>
                    <img src={Event} alt=''/>
                    <img src={Event2} alt=''/>
                    <img src={Event3} alt=''/>
                </figure>
            </div>
            <div className='IntroPage_Button_Wrapper'>
                <button className='IntroPage_Button' name = "매장" onClick = {onBtnClick}>매장</button>
                <button className='IntroPage_Button' name = "포장" onClick = {onBtnClick}>포장</button>
            </div>
        </div>
    );
};

export default IntroPage;