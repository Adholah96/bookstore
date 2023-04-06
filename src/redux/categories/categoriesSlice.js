import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
  showStatus: false,
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, showStatus: true }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
