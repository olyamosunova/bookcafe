import styled from "styled-components";
import {COLORS} from "../variables";

const BurgerButton = styled.button.attrs(() => ({
    type: 'button',
    className: 'menu__button'
}))`
    width: 30px;
    height: 16px;
    padding: 0;
    position: relative;
    
    border: 1px solid ${COLORS.MAIN_TEXT};
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
        
        background-color: ${COLORS.MAIN_TEXT};
    }
`;

export default BurgerButton;
