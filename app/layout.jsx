import React from 'react';
import './globals.css';
import { Provider } from 'react-redux';

/*
export default function RootLayout({ children }) {
  /* return (
    <html lang="en">
      <body className={raleway.className}>
        <Hero />
        <main className="container">{children}</main>
      </body>
    </html>
  ); */
/*
  return (
    <html lang="de">
      <body>
        <Register />
      </body>
    </html>
  );
} */
import { wrapper } from './store/store';

function RootLayout({ children }) {
  return (
    { children }
  );
}

export default wrapper.withRedux(RootLayout);
