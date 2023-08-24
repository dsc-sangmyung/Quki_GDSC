import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/components/NumberPad.scss';
import { BiArrowBack } from "react-icons/bi";

const NumberPad = ({inputValue, setInputValue}) => {


  const navigate = useNavigate();
  const handleClick = (number) => {
    setInputValue((prev) => {
      if (prev.length >= 24) {
        return prev; // 입력 값의 길이가 13보다 크거나 같으면 숫자를 추가하지 않음
      }
      
      const hyphenPositions = [19];
      const currentLength = prev.length;
      if (hyphenPositions.includes(currentLength)) {
        return prev + '-' + number;
      } else {
        return prev + number;
      }
    });
  };

  const handleDelete = () => {
    setInputValue((prev) => {
      // 입력 값이 '010-'과 같거나 짧으면 삭제하지 않음
      if (prev.length <= 15) {
        return prev;
      }
      return prev.slice(0, -1);
    });
  };

  return (
    <div>
      <div className='back-btn' onClick = {()=>navigate(-1)}>
        <BiArrowBack/>뒤로가기
      </div>
        <input type="text" readOnly value={inputValue} /> 
        <div className="button-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
                {number}
            </button>
            ))}
            <button onClick={() => handleClick('')}></button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={handleDelete}>삭제</button>
            {console.log(inputValue)}
        </div>
    </div>
  );
};

export default NumberPad;