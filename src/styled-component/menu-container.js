import styled from "styled-components";
import {COLORS} from "../variables";

const MenuContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 35px;
    
    .menu__button--open {
        + .menu__bubble {
            display: block;
        }
    }
    
    .menu__bubble {
        display: none;
        position: absolute;
        top: calc(100% + 21px);
        left: 0;
        
        min-width: 246px;
        padding: 10px 16px;
        
        border-radius: 11px;
        background-color: ${COLORS.BUBBLE_BG};
        box-shadow: 0 4px 12px ${COLORS.BUTTON_SHADOW};
        z-index: 10;
    }
    
    .menu__list {
        margin: 0;
        padding: 0;
        
        list-style: none;
    }
    
    .menu__list-item {
    
        a {
            display: block;
            padding: 14px;
            
            color: inherit;
            text-decoration: none;
            
            border-bottom: 1px solid ${COLORS.BUBBLE_ITEM_BORDER};
            
            transition: all 0.3s ease-in-out;
            
            :hover,
            :focus {
                color: ${COLORS.BUBBLE_ITEM_BORDER};
            }
        }
        
        :last-of-type a {
            border-bottom-width: 0;
        }
    }
`;

export default MenuContainer;
