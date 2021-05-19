import React from "react";
import ButtonAdd from "../../styled-component/button-add";
import BookCard from "../../styled-component/book-card";
import iconStar from "../../assets/images/icon-star.svg";
import iconAdd from "../../assets/images/icon-add.svg";

const BooksListItem = ({ book }) => {
  const { title, author, rating, cover } = book;
  return (
      <BookCard>
        <a className="card__link">
          <img className="card__cover" src={cover} alt={`${title} by ${author}`} />
          <div className="card__info">
            <p className="card__title">{title}</p>
            <p className="card__author">{author}</p>
            <div className="card__rating">
              <svg viewBox={`${iconStar.viewBox}`} width="16px" height="16px">
                <use xlinkHref={`#${iconStar.id}`}/>
              </svg>
              <p className="card__rating-value">{rating}</p>
            </div>
            <ButtonAdd>
              <svg viewBox={`${iconAdd.viewBox}`} width="18px" height="18px">
                <use xlinkHref={`#${iconAdd.id}`}/>
              </svg>
              <span>Add book in my list</span>
            </ButtonAdd>
          </div>
        </a>
      </BookCard>
  );
};

export default BooksListItem;
