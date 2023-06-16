import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authSlice } from './authSlice';

const makeStore = () => configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});
export default makeStore();
export const wrapper = createWrapper(makeStore);
