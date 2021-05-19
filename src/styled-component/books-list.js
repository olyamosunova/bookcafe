import styled from "styled-components";

const BooksList = styled.ul.attrs(() => ({
    className: 'books-container__list books-list'
}))`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    
    list-style: none;
`;

export default BooksList;
