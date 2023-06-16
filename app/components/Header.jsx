import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h2>
          Header
        </h2>
        <div className="logo">
          <Link href="/"> Bilderbuchgenerator </Link>
        </div>
        <div>
          <button>Log Out</button>
        </div>
        <Link href="https://github.com/"> Github </Link>
      </div>
    </header>
  );
}
export default Header;
