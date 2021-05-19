import styled from "styled-components";
import {COLORS} from "../variables";

const BookCard = styled.li.attrs(() => ({
    className: 'books-list__item card'
}))`
  flex-grow: 1;
  position: relative;
  margin-right: 30px;
  
  overflow: hidden;
  
  :last-of-type {
    margin-right: 0;
  }
  
  .card__link {
    display: block;
    
    cursor: pointer;
    
    :hover,
    :focus {
      .card__info {
        transform: translateY(0);
      }
    }
  }
  
  .card__cover {
    display: block;
    width: 100%;
  }
  
  .card__info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 17px;
    
    border-radius: 10px 10px 0 0;
    background-color: ${COLORS.BOOK_CARD_OVERLAY};
    
    cursor: auto;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    
    p {
      margin: 0;
    }
    
    .card__title {
      margin: 0 0 8px;
      font-weight: 700;
    }
    
    .card__rating {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 8px 0;
      
      p {
        margin-left: 8px;
      }
    }
  }
`;

export default BookCard;
