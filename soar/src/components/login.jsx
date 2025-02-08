import React from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import '../login.css';

import GoogleSignin from "../assets/google_logo.png";
import PaperPlane from "../assets/paper-plane.png";

const Login = () => {
    const [user] = useAuthState(auth);

    // Sign in with google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    };
    
    return (
        <div className="loginMain">
            <h1>Hi! Welcome to Soar</h1>
            <div className="loginContent">
                <button className = "signin-button" onClick={googleSignIn}>
                    <img
                        className = "sign-in-pic"
                        src={GoogleSignin}
                        alt="sign in with google"
                    />
                    <p className="sign-in-text">Sign in</p>
                </button>
                <img
                    className="paper-plane"
                    src={PaperPlane}
                    alt="paper plane"
                />
            </div>
        </div>
    );
}

export default Login;