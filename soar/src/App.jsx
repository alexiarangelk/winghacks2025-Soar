// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { auth } from "./components/firebase.js";
// import {useAuthState} from 'react-firebase-hooks/auth';
// import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// import GoogleSignin from "./assets/Googlesignin.png";

// function App() {
//   const [count, setCount] = useState(0);
//   const [user] = useAuthState(auth);
//   const googleSignIn = () => {
//       const provider = new GoogleAuthProvider();
//       signInWithRedirect(auth, provider);
//   };
//   const signOut = () => {
//       auth.signOut();
//   };
//   return (
//     <>
//       <div>
//        {user ? (
//         <button onClick={signOut} className="sign-out" type="button">
//           Sign Out
//         </button>
//         ) : (
//         <button className="sign-in">
//           <img
//             onClick={googleSignIn}
//             src={GoogleSignin}
//             alt="sign in with google"
//             type="button"
//           />
//         </button>
//       )}
//       </div>
//     </>
//   )
// }

import React from 'react';
import {auth} from './components/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/login';
import Chat from './components/chat';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Chat/> : <Login/>
  );
}

export default App
