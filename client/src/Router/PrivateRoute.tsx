import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../helpers/cookie';

type Props = {
  children: any;
};

function PrivateRoute({ children }: Props) {
  const user = getCookie('login');
  if (user !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
