import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
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
    
    border: 2px solid #E9D9D9;
    border-radius: 43px;
    background-color: transparent;
    background-image: url("src/assets/images/icon-loupe.svg");
    background-repeat: no-repeat;
    background-position: 28px 50%;
    
    outline: none;
    transition: background-color 0.3s ease-in-out;
    
    :hover {
        background-color: #E9D9D9;
    }
`;

const HeaderSearch = () => {
    return (
        <SearchContainer>
            <SearchInput />
        </SearchContainer>
    );
};

export default HeaderSearch;
