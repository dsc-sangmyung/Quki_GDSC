import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../scss/components/SideMenuBar.scss';
import { categories } from '../components/common';
import { BiHomeAlt } from "react-icons/bi";

const Category = styled(NavLink)`
    
    width : 150px;
    height : 120px;

	cursor: pointer;

	text-decoration: none;
    text-align : center;
    justify-content : center;
    align-items : center;

    padding-top: 60px;
    margin-top : 50px;
    
    -webkit-tap-highlight-color: transparent;

    color : rgb(85, 48, 0);

    &.active {
        background: rgb(197, 162, 115);
        &:hover{
            color: rgb(177, 104, 8);
            box-shadow: 2px 2px 20px rgb(177, 104, 8);
        }
    }
`;

const SideMenuBar = ({cart, setCart}) => {

    const navigate = useNavigate();

    const onClick = () => {
        setCart([]);
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='SideMenuBar_Container'>
            {categories.map(category => (
                <Category
                 key = {category.id} 
                 className={({isActive}) => (isActive ? 'active' : undefined)}
                 to = {category.type === 'all' ? '/menu/' : `/menu/${category.type}/`}
                >
                    {category.name}
                </Category>
            ))}
            <button 
                className='SideMenuBar_btn'
                onClick={onClick}    
            >
                <BiHomeAlt size={100}/>
                처음으로
            </button>
        </div>
    );
};

export default SideMenuBar;