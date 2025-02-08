import React from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Chat from './chat';

import GoogleSignin from "../assets/Googlesignin.png";

const Login = () => {
    const [user] = useAuthState(auth);

    // Sign in with google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    
    return (
        <div>
            <center>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign in with google"
                    type="button"
                />
            </button>
            </center>
        </div>
    );
}

export default Login;