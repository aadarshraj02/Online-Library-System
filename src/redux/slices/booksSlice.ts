import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types/types';
import { books as initialBooks } from '../../utils/BookData';

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: JSON.parse(sessionStorage.getItem('books') || '[]') && initialBooks,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const updatedBooks = [...state.books, action.payload];
      state.books = updatedBooks;
      sessionStorage.setItem('books', JSON.stringify(updatedBooks));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
