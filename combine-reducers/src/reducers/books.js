import {ADD_BOOK,REMOVE_BOOK } from '../actions/actionTypes'

let books = (state, action) => {
    if (state === undefined) {
        state = {
            books: []
        }
    }
    let idx;
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.author]
            };
        case REMOVE_BOOK:
            idx = state.books.findIndex(author => author.id === action.id);
            return {
                ...state,
                books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
            };
        default:
            return state;
    }
}
export default books;