import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import MainLayout from '../views/layout/MainLayout';
import AuthLayout from '../views/layout/AuthLayout';
import LayoutSkeleton from '../views/skeleton/LayoutSkeleton';
import config from '../config/config';
import { useAuth } from '../context/AuthContext';


function AuthMiddleware({ component: Component, layout: Layout = MainLayout, skeleton, ...rest }) {
  const { user, isLoggedIn, logout } = useAuth();

  if (isLoggedIn && !rest.privateRoute) {
    return <Navigate to='/' />;
  }

  if (!isLoggedIn && rest.privateRoute) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      {(!user && rest.privateRoute)  ? <LayoutSkeleton skeleton={skeleton} /> :
        <Layout skeleton={skeleton} config={config} userData={user}>
          <Component {...rest} />
        </Layout>
      }
    </>
  );
}

export default AuthMiddleware