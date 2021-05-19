import styled from "styled-components";
import {COLORS} from "../variables";

const MainBannerWrapper = styled.article.attrs(() => ({
    className: 'main-banner'
}))`
    display: flex;
    flex-direction: row;
    margin: 0 0 40px;
    padding: 20px 40px;
    
    font-size: 24px;
    line-height: 36px;

    border-radius: 11px;
    background-color: ${COLORS.BANNER_BG};
    
    .main-banner__image {
        margin-right: 35px;
    }
    
    img {
        display: block;
        width: auto;
        height: 100%;
        max-height: 241px;
        mix-blend-mode: darken;
    }
    
    .main-banner__quote {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 450px;
    
        p {
            margin: 0;
        }
        
        .main-banner__quote-author {
            margin-bottom: 30px;
        }
    }
`;

export default MainBannerWrapper;
