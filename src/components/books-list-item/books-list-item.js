import React from "react";
import styled from "styled-components";

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
    background-color: rgba(196, 196, 196, 0.89);
    
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

const ButtonAdd = styled.button.attrs(() => ({
  className: 'button',
  type: 'button'
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 36px 17px;
  
  font-weight: 700;
  
  span {
    margin-left: 12px;
  }
`;

const BooksListItem = ({ book }) => {
  const { title, author, rating, cover } = book;
  return (
      <BookCard>
        <a className="card__link">
          <img className="card__cover" src={cover} />
          <div className="card__info">
            <p className="card__title">{title}</p>
            <p className="card__author">{author}</p>
            <div className="card__rating">
              <img src="/src/assets/images/icon-star.svg" />
              <p className="card__rating-value">{rating}</p>
            </div>
            <ButtonAdd>
              <img src="/src/assets/images/icon-add.svg" />
              <span>Add book in my list</span>
            </ButtonAdd>
          </div>
        </a>
      </BookCard>
  );
};

export default BooksListItem;
