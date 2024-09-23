import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  sortType: 'none',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    resetFilter: (state) => {
      state.title = '';
    },
    resetSort: (state) => {
      state.sortType = 'none';
    },
  },
});

export const { setTitleFilter, setSortType, resetFilter, resetSort } =
  filterSlice.actions;

export default filterSlice.reducer;
