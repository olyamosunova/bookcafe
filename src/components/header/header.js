import React from "react";
import styled from "styled-components";
import Menu from "../menu/menu";
import HeaderSearch from "../header-search/header-search";

const HeaderContainer = styled.div.attrs(() => ({
    className: 'container',
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    color: #735757;
`;

const MenuContainer = styled.div.attrs(() => ({
    className: 'menu',
}))`
    display: flex;
    flex-direction: column;
    margin-right: 35px;
`;

const BurgerButton = styled.button.attrs(() => ({
    type: 'button',
    className: 'menu__button'
}))`
    width: 30px;
    height: 16px;
    padding: 0;
    position: relative;
    
    border: 1px solid #735757;
    border-width: 1px 0 1px 0;
    background-color: transparent;
    
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    
    :hover,
    :focus {
        opacity: 0.5;
    }
    
    ::before {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        
        width: 100%;
        height: 1px;
        
        background-color: #735757;
    }
`;

const Header = () => {
    return (
        <header>
            <HeaderContainer>
                <MenuContainer>
                    <BurgerButton />
                </MenuContainer>
                <Menu />
                <HeaderSearch />
                <button className="button" type="button">Log in / Registration</button>
            </HeaderContainer>
        </header>
    );
};

export default Header;
