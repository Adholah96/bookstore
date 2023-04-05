import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../BookItems';

const initialState = {
  bookItems,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      const updatedBookItems = [...state.bookItems, newBook];
      return { ...state, bookItems: updatedBookItems };
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      const updatedBookItem = state.bookItems.filter(
        (book) => book.item_id !== bookId,
      );
      return { ...state, bookItems: updatedBookItem };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
