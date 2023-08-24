import React, { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Advice2 from "../components/Advice2";
import "../scss/components/Modal2.scss";

const AdvicePage2 = ({receipt, setReceipt, cart, setCart}) => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);
  const [time, setTime] = useState(32);


  useEffect(() => {
    const storedQueueNumber = localStorage.getItem("queueNumber") || 1;
    setQueueNumber(Number(storedQueueNumber));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      setQueueNumber((prevNumber) => {
        const newQueueNumber = prevNumber + 1;
        localStorage.setItem("queueNumber", newQueueNumber);
        return newQueueNumber;
      });
    }, 2000);

    return () => {
      clearTimeout(timer); 
    };
  }, []);

  useEffect(() => {
    const goHome = setTimeout(() => {
      setShowModal(false);
      setCart([]);
      setReceipt({
        order : undefined,
        type : undefined,
        menus : [],
        totalPrice : 0,
      });
      navigate('/');
    }, 3000);

    return () => {
      clearTimeout(goHome);
    }
  })

    useEffect(() => {
      time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  const value = JSON.stringify(cart);

  return (
    <div>
      <Advice2 />
      {showModal && (
        <div className="modal2">
          <div className="modal-content2">
            <div className="modal_close" onClick={()=>navigate('/')}>x</div>
            <p className="modal-text3">
              감사합니다.<br />결제가 완료되었습니다!
            </p>
            <p className="modal-text4">
              발급된 대기번호를 확인해 주세요
            </p>
            <div className="modal-text5">{queueNumber}</div>
            <div style={{ height: "auto", margin: "40px 630px 0 0", maxWidth: 64, width: "100%" }}>
              <QRCode
                style={{ height: "680px", width: "680px" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
              <div className="modal_Count">{`남은시간 : ${time}`}</div>
              {console.log(value)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvicePage2;