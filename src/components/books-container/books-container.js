import React from "react";
import styled from "styled-components";
import BooksListItem from "../books-list-item/books-list-item";

const BooksList = styled.ul.attrs(() => ({
    className: 'books-container__list books-list'
}))`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    
    list-style: none;
`;

const BooksContainer = (props) => {
    const {title, books} = props;

    return (
        <section className="books-container">
            <h2 className="books-container__title">{title}</h2>
            <BooksList>
                {books && books.map(book => <BooksListItem book={book} key={book.id} />)}
            </BooksList>
        </section>
    );
};

export default BooksContainer;
