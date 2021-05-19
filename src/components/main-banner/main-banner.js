import React from "react";
import MainBannerWrapper from "../../styled-component/main-banner-wrapper";

const MainBanner = () => {
  return (
      <MainBannerWrapper>
          <div className="main-banner__image">
              <img src="/src/assets/images/index-books.png" alt="Цитата" />
          </div>
          <div className="main-banner__quote">
              <p className="main-banner__quote-author">Henry David Thoreau:</p>
              <p className="main-banner__quote-text">«How many a man has dated a new era in his life
                  from the reading of a book»</p>
          </div>
      </MainBannerWrapper>
  );
};

export default MainBanner;
