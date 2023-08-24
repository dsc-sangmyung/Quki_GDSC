import React, { useState, useEffect } from 'react';
import { nameList } from '../components/common';
import '../scss/pages/CheckPage.scss';
import { useNavigate } from 'react-router-dom';

const CheckPage = ({ receipt, setReceipt, cart, setCart }) => {
  const datas = receipt.menu === undefined ? cart : receipt.menu;
  const navigate = useNavigate();

  const [items, setItems] = useState(datas);

  useEffect(() => {
    setItems(datas);
  }, [datas]);

  const calculateTotalPrice = () => {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
      result += items[i].price * items[i].count;
    }
    return result;
  };

  const decreaseCount = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
    setCart(
      cart.map((item) =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const increaseCount = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };


    const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setCart(updatedItems);
  };

  const goPrevious = () => {
    setReceipt({
      ...receipt,
      menu: items
    });
    setCart(items);
    navigate('/menu');
  };

  const scrollItems = (direction) => {
    const wrapper = document.querySelector('.CheckPage_Wrapper');
    if (wrapper) {
      wrapper.scrollBy({ top: direction * 100, behavior: "smooth" });
    }
  };

  return (
    <div className='CheckPage_Container'>
      <div style={{background : 'burlywood'}}><div className='CheckPage_Text'>주문을 확인해주세요.</div></div>
      <div className='CheckPage_Wrapper'>
        {Array.isArray(items) && items.length ? items.map(data =>
          <div key={data.id} className='CheckPage_Items'>
            <div><img src={data.url} alt='' className='Items_img' /></div>
            <div className="text-container">
              <div className='Items_Menu_Text'>{nameList.map(item => <span style={{width : '500px'}} key={item.id}>{data.id === item.id && item.name}</span>)}</div>
            </div>
            <div className="count-container">
              <button onClick={() => decreaseCount(data.id)} className="countbutton1">-</button>
              <div className="count">{data.count}</div>
              <button onClick={() => increaseCount(data.id)} className="countbutton2">+</button>
            </div>
            <button onClick={() => removeItem(data.id)} className="remove-button">X</button>
          </div>
        ) : <div className='Empty_Text'>장바구니가 비어있습니다!</div>}
      </div>
      <div className="arrow-buttons">
        <button
          className="arrow-button up-arrow"
          onClick={() => scrollItems(-3.1)}
        >
          ▲
        </button>
        <button
          className="arrow-button down-arrow"
          onClick={() => scrollItems(3.1)}
        >
          ▼
        </button>
      </div>
      <div className='CheckPage_Bottom_Bar'>
          <div className="totalprice">
            <span style={{marginLeft : '80px', fontSize : '35px'}}>총 금액</span>
            <span className="CheckPage_Total_Price">{calculateTotalPrice()} 원</span>
          </div>
          <div className="buttonss">
            <button className="butt1" onClick={() => goPrevious()}>이전</button>
            <button className="butt2" onClick={() => {cart.length === 0 ? alert("장바구니가 비어있습니다!") : navigate('/point'); }}>결제하기</button>
            {console.log(datas)}
            {console.log(cart.length === 0)}
          </div>
      </div>
    </div>
  );
};

export default React.memo(CheckPage);
