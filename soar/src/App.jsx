import React from 'react';
import {auth} from './components/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/login';
import Registration from './components/Registration';
import Routing from './components/routing';
import Registration from './components/Registration';

function App() {
  const [user] = useAuthState(auth);
  return (
    // user ? <Chat/> : <Login/>
    //user ? <Routing/> : <Login/>

    user ? <Routing/> : <Login/>
  );
}

export default App
