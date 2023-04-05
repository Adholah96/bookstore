import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
