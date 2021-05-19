import styled from "styled-components";

const MenuContainer = styled.div.attrs(() => ({
    className: 'menu',
}))`
    display: flex;
    flex-direction: column;
    margin-right: 35px;
`;

export default MenuContainer;
