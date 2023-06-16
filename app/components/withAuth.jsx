import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  function Wrapper(props) {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = /* authentication logic */ false;

      if (!isAuthenticated) {
        router.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  }

  return Wrapper;
};
export default withAuth;
