import styled from "styled-components";
import {COLORS} from "../variables";

const Search = styled.div`
    flex-grow: 1;
    margin: 0 35px;
`;

const SearchInput = styled.input.attrs(() => ({
    placeholder: 'Search books'
}))`
    width: 100%;
    padding: 15px 15px 15px 86px;
    
    font-size: 16px;
    line-height: 20px;
    
    border: 2px solid ${COLORS.BUTTON_BG};
    border-radius: 43px;
    background-color: transparent;
    background-image: url("src/assets/images/icon-loupe.svg");
    background-repeat: no-repeat;
    background-position: 28px 50%;
    
    outline: none;
    transition: background-color 0.3s ease-in-out;
    
    :hover {
        background-color: ${COLORS.BUTTON_BG};
    }
`;

export {Search, SearchInput};
