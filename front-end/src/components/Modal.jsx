import React, { useState } from "react";
import '../scss/components/Modal.scss';

function Modal({ closeModal, data, cart }) {
  const [count, setCount] = useState(data.count);
  const [hoveredIce, setHoveredIce] = useState(null);
  const [hoveredCream, setHoveredCream] = useState(null);
  const [hoveredShot, setHoveredShot] = useState(null);

  const onIncrease = () => setCount(count + 1);

  const onDecrease = () => {
    if (count - 1 < 1) {
      alert('1개 이상 담아주세요');
      return;
    }
    setCount(count - 1);
  };

  const onSubmit = () => {
    const temp = { ...data, count };
  
    const itemIndex = cart.findIndex(
      (item) =>
        item.id === temp.id &&
        JSON.stringify(item.options) === JSON.stringify(temp.options)
    );
  
    if (itemIndex !== -1) {
      cart[itemIndex].count += temp.count;
    } else {
      cart.push(temp);
    }
  
    console.log(cart);
    closeModal();
  };
  

  const addOption = (e, optionType) => {
    const { id } = e.target;
    switch (optionType) {
      case 'ice':
        setHoveredIce(id);
        data.options.ice = id === '1' ? 'less' : id === '2' ? 'basic' : 'more';
        break;
      case 'cream':
        setHoveredCream(id);
        data.options.cream = id === '4' ? 'less' : id === '5' ? 'basic' : 'more';
        break;
      case 'shot':
        setHoveredShot(id);
        data.options.shot = id === '7' ? 'basic' : id === '8' ? 'oneshot' : 'twoshot';
        break;
      default:
        break;
    }
  };

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="Modal_Text">옵션을 선택하세요</div>
        <div className="Modal_Container">
          <img src={data.url} alt="" className="Modal_Img" />
          <div className="Modal_Wrapper">
            <div className="Modal_Menu_Text">{data.name}</div>
            <div className="Modal_Count">
              <div style={{ fontSize: '30px' }}>개수</div>
              <div className="Modal_Count_Btn">
                <div className="countbutton" onClick={onDecrease}>-</div>
                <div style={{ marginLeft: '40px', marginRight: '40px', fontSize: '30px' }}>{count}</div>
                <div className="countbutton" onClick={onIncrease}>+</div>
              </div>
            </div>
            {data.ice && (
              <div className="Modal_Ice">
                <div style={{ fontSize: '30px' }}>얼음량</div>
                <div className="Modal_Ice_Btn">
                  <div
                    className={`Icebutton ${hoveredIce === '1' ? 'selected' : ''}`}
                    id={1}
                    onClick={(e) => addOption(e, 'ice')}
                  >
                    적게
                  </div>
                  <div
                    className={`Icebutton ${hoveredIce === '2' ? 'selected' : ''}`}
                    id={2}
                    onClick={(e) => addOption(e, 'ice')}
                  >
                    기본
                  </div>
                  <div
                    className={`Icebutton ${hoveredIce === '3' ? 'selected' : ''}`}
                    id={3}
                    onClick={(e) => addOption(e, 'ice')}
                  >
                    많이
                  </div>
                </div>
              </div>
            )}
            {data.cream && (
              <div className="Modal_Cream">
                <div style={{ fontSize: '30px' }}>휘핑</div>
                <div className="Modal_Cream_Btn">
                  <div
                    className={`Creambutton ${hoveredCream === '4' ? 'selected' : ''}`}
                    id={4}
                    onClick={(e) => addOption(e, 'cream')}
                  >
                    적게
                  </div>
                  <div
                    className={`Creambutton ${hoveredCream === '5' ? 'selected' : ''}`}
                    id={5}
                    onClick={(e) => addOption(e, 'cream')}
                  >
                    기본
                  </div>
                  <div
                    className={`Creambutton ${hoveredCream === '6' ? 'selected' : ''}`}
                    id={6}
                    onClick={(e) => addOption(e, 'cream')}
                  >
                    많이
                  </div>
                </div>
              </div>
            )}
            {data.type === 'coffee' && (
              <div className="Modal_Shot">
                <div style={{ fontSize: '30px' }}>샷추가</div>
                <div className="Modal_Shot_Btn">
                  <div
                    className={`Shotbutton ${hoveredShot === '7' ? 'selected' : ''}`}
                    id={7}
                    onClick={(e) => addOption(e, 'shot')}
                  >
                    기본
                  </div>
                  <div
                    className={`Shotbutton ${hoveredShot === '8' ? 'selected' : ''}`}
                    id={8}
                    onClick={(e) => addOption(e, 'shot')}
                  >
                    1샷
                  </div>
                  <div
                    className={`Shotbutton ${hoveredShot === '9' ? 'selected' : ''}`}
                    id={9}
                    onClick={(e) => addOption(e, 'shot')}
                  >
                    2샷
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="horizon"/>
        <div className="Modal_Price">
          <div>가격 {data.price * count} 원</div>
        </div>
        <div className="Modal_Btn">
          <button className="Modal_Action_Btn" onClick={closeModal}>
            취소
          </button>
          <button className="Modal_Action_Btn" onClick={onSubmit}>
            주문 담기
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Modal;
