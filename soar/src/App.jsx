import React from 'react';
import {auth} from './components/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/login';
import Routing from './components/routing';
import Registration from './components/Registration';

function App() {
  const [user] = useAuthState(auth);
  const registered = true;  //false: see registration
  return (
    // user ? <Chat/> : <Login/>
    //user ? <Routing/> : <Login/>

    user ? 
    registered?
      <Routing/>
    : <Registration/>
    : <Login/>
  );
}

export default App
