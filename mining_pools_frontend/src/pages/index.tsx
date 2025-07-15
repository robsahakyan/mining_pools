import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Spinner from '../@core/components/spinner';

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/mining-pools-dashboard');
  }, [router]);

  return <Spinner />;
};

HomePage.authGuard = false;

export default HomePage; 