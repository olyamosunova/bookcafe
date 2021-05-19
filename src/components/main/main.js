import React from "react";
import styled from "styled-components";
import MainBanner from "../main-banner/main-banner";
import BooksContainer from "../books-container/books-container";

const MainWrapper = styled.main`
    padding: 40px 0;
`;

const Main = () => {
    const books = [
        {
            id: 1,
            title: 'Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 4.8,
            cover: '/src/assets/images/book.jpg'
        },
        {
            id: 2,
            title: 'Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 4.8,
            cover: '/src/assets/images/book.jpg'
        },
        {
            id: 3,
            title: 'Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 4.8,
            cover: '/src/assets/images/book.jpg'
        },
        {
            id: 4,
            title: 'Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 4.8,
            cover: '/src/assets/images/book.jpg'
        },
        {
            id: 5,
            title: 'Great Gatsby',
            author: 'F. Scott Fitzgerald',
            rating: 4.8,
            cover: '/src/assets/images/book.jpg'
        }
    ];

    return (
        <MainWrapper>
            <div className="container">
                <MainBanner />
                <BooksContainer title={'Popular'} books={books} />
            </div>
        </MainWrapper>
    )
};

export default Main;
