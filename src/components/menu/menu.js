import React from "react";
import styled from "styled-components";

const MenuList = styled.ul.attrs(() => ({
    className: 'menu-list'
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const MenuItem = styled.li.attrs(({item, activeItem}) => ({
    className: `menu-list__item ${item === activeItem ? 'menu-list__item--active' : ''}`
}))`
    margin: 0 15px;
    
    &.menu-list__item--active {
        a {
            font-weight: 700;
            cursor: auto;
            
            :hover,
            :focus {
                opacity: 1;
            }
        }
    }
    
    a {
        color: inherit;
        text-decoration: none;
        
        transition: opacity 0.3s ease-in-out;
        
        :hover,
        :focus {
            opacity: 0.5;
        }
    }
`;

const Menu = () => {
    const activeItem = 'Index';
    const menuItems = ['Index', 'Popular', 'Genres', 'Authors'];

    return (
        <MenuList>
            {menuItems.map((item, index) => (
                <MenuItem key={item + index} item={item} activeItem={activeItem}>
                    <a href={'#' + item}>{item}</a>
                </MenuItem>
            ))}
        </MenuList>
    );
};

export default Menu;
