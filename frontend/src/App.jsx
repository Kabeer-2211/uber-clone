import React from 'react';
import Router from './router';
import UserContextProvider from './context/UserProvider';

const App = () => {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App;