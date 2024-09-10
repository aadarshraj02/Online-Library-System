import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types/types';
import { books as initialBooks } from '../../utils/BookData';

interface BooksState {
  books: Book[];
  nextId : number;
}

const initialState: BooksState = {
  books: JSON.parse(sessionStorage.getItem('books') || '[]') && initialBooks,
  nextId: Math.max(0, ...initialBooks.map(book => book.id)) + 1,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<Book, 'id'>>) => {
      const newBook = { ...action.payload, id: state.nextId };
      state.nextId += 1;
      const updatedBooks = [...state.books, newBook];
      state.books = updatedBooks;
      sessionStorage.setItem('books', JSON.stringify(updatedBooks));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
