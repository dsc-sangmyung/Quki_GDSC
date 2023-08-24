import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Html5Qrcode } from 'html5-qrcode';
import '../scss/pages/QrReaderPage.scss';

const checkCameraPermission = async () => {
  try {
    const { state } = await navigator.permissions.query({ name: 'camera' });
    if (state === 'denied') {
      throw new Error('카메라 권한이 거부되었습니다.');
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const Test = ({ cart, setCart }) => {
  const [data, setData] = useState('No result');
  const qrScannerRef = useRef(null);

  const navigate = useNavigate();
  const onClickMain = () => {
    navigate('/');
  };

  const handleResult = (result) => {
    if (result) {
      setData(result);

      const qrData = result;
      const qrDataWithoutNewLines = qrData.replace(/\r?\n|\r/g, '');
      const parsedData = JSON.parse(
        qrDataWithoutNewLines.replace(/[\u0000-\u0019]+/g, '')
      );
      setCart(parsedData);
      navigate('/check');
    }
  };
  

  useEffect(() => {
    let html5QrCode;
  
    const initializeQrCodeScanner = async () => {
      if (await checkCameraPermission()) {
        html5QrCode = new Html5Qrcode("qrScanner");
        html5QrCode.start(
          { facingMode: "environment" }, // rear-facing camera
          {
            fps: 1500, // frames per second
            qrbox: {width: 800, height: 800},
            aspectRatio : 1.3333334,
          },
          (message) => {
            handleResult(message);
            html5QrCode.stop();
          },
        );
      }
    };
  
    initializeQrCodeScanner();
  
    return () => {

    };
  }, []); // 변수들을 넣어주세요.

  return (
    <div className="QrReader_Container">
      <div className="QrReader_Text">QR코드를 스캔해주세요</div>
      <div className="QrReader_Wrapper">
        <div
          id="qrScanner"
          ref={(element) => {
            if (element) {
              qrScannerRef.current = element;
              element.setAttribute("id", "qrScanner");
            }
          }}
        ></div>
      </div>
      <button onClick={onClickMain} className="QrReader_Button">
        뒤로가기
      </button>
    </div>
  );
};

export default React.memo(Test);
