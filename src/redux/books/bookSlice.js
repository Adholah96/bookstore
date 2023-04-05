import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../BookItems';

const initialState = {
  bookItems,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: () => {},
    removeBook: () => {},
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
