import React from 'react';
import {auth} from './components/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/login';
import Routing from './components/routing';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Routing/> : <Login/>

  );
}

export default App
