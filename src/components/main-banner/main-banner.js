import React from "react";
import styled from "styled-components";

const MainBannerWrapper = styled.article.attrs(() => ({
    className: 'main-banner'
}))`
    display: flex;
    flex-direction: row;
    margin: 0 0 60px;
    padding: 20px 40px;
    
    font-size: 24px;
    line-height: 36px;

    border-radius: 11px;
    background-color: #E9D9D9;
    
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

const MainBannerImage = styled.div.attrs(() => ({
    className: 'main-banner__image'
}))`
    margin-right: 35px;
`;

const MainBanner = () => {
  return (
      <MainBannerWrapper>
          <MainBannerImage>
              <img src="/src/assets/images/index-books.png" />
          </MainBannerImage>
          <div className="main-banner__quote">
              <p className="main-banner__quote-author">Henry David Thoreau:</p>
              <p className="main-banner__quote-text">«How many a man has dated a new era in his life
                  from the reading of a book»</p>
          </div>
      </MainBannerWrapper>
  );
};

export default MainBanner;
