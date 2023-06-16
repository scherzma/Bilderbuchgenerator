'use client';

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { Provider, useDispatch } from 'react-redux';
import store, { wrapper } from '../app/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {' '}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
