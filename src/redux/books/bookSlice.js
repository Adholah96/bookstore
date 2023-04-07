import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/K0ZPB0PPPH08kAVBjrB1/books/';
const INITIAL_STATE = {
  books: [],
  isLoading: false,
  error: false,
  success: false,
};

const parseBooksData = (data) => {
  const parsedData = [];

  data.forEach((element) => {
    const [id, [book]] = element;
    const { title, author, category } = book;

    parsedData.push({
      id,
      title,
      author,
      category,
    });
  });

  return parsedData;
};

export const fetchBooksData = createAsyncThunk(
  'books/fetchBooksData',
  async () => {
    try {
      const { data } = await axios(url);
      const parsedData = parseBooksData(Object.entries(data));
      return parsedData;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ id, title, author }) => {
    try {
      const { data } = await axios.post(url, {
        item_id: id,
        title,
        author,
        category: 'Sci-fi',
      });
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const { data } = await axios.delete(url + id);
    return data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooksData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooksData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(removeBook.rejected, (state) => ({
        ...state,
        success: false,
      }));
  },
});

export default booksSlice.reducer;
