import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = /* authentication logic */ false;

    // If authenticated, redirect to homepage
    if (isAuthenticated) {
      router.replace('/');
    }
  }, []);
};
export default Login;
