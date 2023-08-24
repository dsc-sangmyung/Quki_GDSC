import React, {Suspense, lazy, useState} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const IntroPage = lazy(() => import('./pages/IntroPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const QrReaderPage = lazy(() => import('./pages/QrReaderPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const CheckPage = lazy(() => import('./pages/CheckPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const PointPage = lazy(() => import('./pages/PointPage'));
const AdvicePage = lazy(() => import('./pages/AdvicePage'));
const AdvicePage2 = lazy(() => import('./pages/AdvicePage2'));

const App = () => {
  const [receipt, setReceipt] = useState({
    order : undefined,
    type : undefined,
    menus : [],
    totalPrice : 0,
  });

  const [cart, setCart] = useState([]);

  return (
    <HashRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<IntroPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/order' element={<OrderPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/reader' element={<QrReaderPage cart = {cart} setCart = {setCart}/>}/>
            <Route path='/menu' element={<MenuPage receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
            <Route path = "menu/:category" element={<MenuPage receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
            <Route path = "/check" element={<CheckPage receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
            <Route path = "/point" element={<PointPage />}/>
            <Route path = "/payment" element={<PaymentPage />}/>
            <Route path='/advice' element={<AdvicePage />}/>
            <Route path="/advice2" element={<AdvicePage2 receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;