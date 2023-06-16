import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Initial state
const initialState = {
  books: [],
  pictures: [],
};

// Actual Slice
export const authSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Action to set the authentication status
    logout(state, action) {
      state.token = action.payload.token;
    },
    loadBook(state, action) 
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.auth,
    }),
  },
});

export const { setAuthToken } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
