import { useRouter } from 'next/router';
import React from 'react';

function RouteSampleButton({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default RouteSampleButton;
