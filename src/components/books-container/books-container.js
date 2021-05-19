import React from "react";
import BooksList from "../../styled-component/books-list";
import BooksListItem from "../books-list-item/books-list-item";

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
