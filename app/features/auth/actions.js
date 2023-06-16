import { SET_ERROR, SET_SESSION } from './Types';

export const setSession = (payload) => ({
  type: SET_SESSION,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
