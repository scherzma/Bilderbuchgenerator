/* eslint-disable quote-props */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import store from '../../store/store';

const initianlState = {
  authToken: null,
  isLoggedin: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initianlState,
  reducers: {
    setError(state, msg) {
      const error = msg ?? 'payload';

      return {
        ...state,
        error,
      };
    },
    setSession(state, payload) {
      const isLoggedin = payload.success;
      const authToken = payload.token;
      console.log('setSession', store.getState(), payload);
      alert('yes');
      return {
        ...store.getState(),
        isLoggedin,
        authToken,
      };
    },
    logout(state) {
      const authToken = '123';
      const isLoggedin = true;
      return {
        ...state,
        authToken,
        isLoggedin,
      };
    },

  },
});

export const { setSession, setError, logout } = authSlice.actions;
export default authSlice.reducer;
