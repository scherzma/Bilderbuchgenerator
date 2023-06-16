import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from '../features/auth/reducers';

const middleware = [thunk];

const store = configureStore({
  reducer: combineReducers({
    auth,
  }),
  middleware,
});

export default store;
