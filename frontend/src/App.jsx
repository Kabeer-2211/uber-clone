import React from 'react';
import Router from './router';
import UserContextProvider from './context/UserProvider';
import Layout from './layout/layout';
import AxiosInterceptorProvider from './context/AxiosInterceptorProvider';
import ErrorProvider from './context/ErrorProvider';

const App = () => {
  return (
    <ErrorProvider>
      <AxiosInterceptorProvider>
        <UserContextProvider>
          <Layout>
            <Router />
          </Layout>
        </UserContextProvider>
      </AxiosInterceptorProvider>
    </ErrorProvider>
  )
}

export default App;