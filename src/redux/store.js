import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import filterReducer from './slices/filterSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});
