import React from 'react';
import SideMenuBar from '../components/SideMenuBar';
import Menu from '../components/Menu';
import '../scss/pages/MenuPage.scss';


const MenuPage = ({receipt, setReceipt, cart, setCart}) => {
    return (
        <div className='MenuPage_Container'>
            <SideMenuBar cart={cart} setCart={setCart}/>
            <Menu cart={cart} />
        </div>
    );
};

export default MenuPage;