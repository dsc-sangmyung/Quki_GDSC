import React, {useState} from 'react';
import '../scss/components/Point.scss';
import { FcPhoneAndroid } from 'react-icons/fc';
import TwoButtons from './TwoButtons';
import NumberPad from './NumberPad';


const Point = () => {
    const [inputValue, setInputValue] = useState('           010-');
  return (

    <div className="icon-container">
        <FcPhoneAndroid className="icon-left-bottom" size={500} />
        <div className="text1">
            <p>적립하시겠어요?</p>
        </div>
        <div className="text2">
            <p>항상 저희 메가커피를<br />이용해주셔서 감사합니다.</p>
        </div>
        <div className="text3">
            <p>"적립후결제" 버튼을 누르시면<br />저장된 주문 화면으로 이동합니다.</p>
        </div>
        <div className="text4">
            <p>Quki 어플리케이션에서<br />"QR주문"을 확인해보세요!</p>
        </div>
        <div className="text5">
            <p>전화번호를 입력해주세요.</p>
        </div>
        <div className="number-pad">
            <NumberPad inputValue={inputValue} setInputValue={setInputValue}/>
        </div>
        <div className="button">
            <TwoButtons  inputValue={inputValue} setInputValue={setInputValue}/>
        </div>
    </div>

  );
};

export default Point;