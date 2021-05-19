import React from "react";
import HeaderContainer from "../../styled-component/header-container";
import MenuContainer from "../../styled-component/menu-container";
import Menu from "../menu/menu";
import HeaderSearch from "../header-search/header-search";
import Button from "../../styled-component/button";
import BurgerButton from "../../styled-component/burger-button";

const Header = () => {
    const menuItems = ['All', 'Popular', 'Genres', 'Authors', 'Ratings'];

    return (
        <header>
            <HeaderContainer>
                <MenuContainer className="menu">
                    <BurgerButton className="menu__button" />
                    <div className="menu__bubble">
                        <ul className="menu__list">
                            {menuItems.map(item => <li className="menu__list-item" key={item}><a href="#">{item}</a></li>)}
                        </ul>
                    </div>
                </MenuContainer>
                <Menu />
                <HeaderSearch />
                <Button>Log in / Registration</Button>
            </HeaderContainer>
        </header>
    );
};

export default Header;
