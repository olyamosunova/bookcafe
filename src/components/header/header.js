import React from "react";
import HeaderContainer from "../../styled-component/header-container";
import MenuContainer from "../../styled-component/menu-container";
import Menu from "../menu/menu";
import HeaderSearch from "../header-search/header-search";
import Button from "../../styled-component/button";
import BurgerButton from "../../styled-component/burger-button";

const Header = () => {
    return (
        <header>
            <HeaderContainer>
                <MenuContainer>
                    <BurgerButton />
                </MenuContainer>
                <Menu />
                <HeaderSearch />
                <Button>Log in / Registration</Button>
            </HeaderContainer>
        </header>
    );
};

export default Header;
