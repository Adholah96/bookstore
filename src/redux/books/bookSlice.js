import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  bookTitle: '',
  bookAuthor: '',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload: { bookTitle, bookAuthor } }) => {
      state.books.push({ bookTitle, bookAuthor });
    },
    removeBook: () => {},
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
