'use client';

/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { Provider, useDispatch } from 'react-redux';
import store from '../app/store/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
