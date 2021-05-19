import styled from "styled-components";
import {COLORS} from "../variables";

const HeaderContainer = styled.div.attrs(() => ({
    className: 'container',
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    color: ${COLORS.MAIN_TEXT};
`;

export default HeaderContainer;
