import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../state/selectors/user-selectors';
import Layout from './Cms';
import LoginForm from './LoginForm';

const PageSelection: React.FC = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      {isLoggedIn ? <Layout /> : <LoginForm />}
    </>
  );
};

export default PageSelection;
