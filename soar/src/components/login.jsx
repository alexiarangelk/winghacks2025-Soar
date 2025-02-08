import React from 'react';
import { auth, newUserCheck, addUser} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import '../login.css';

import GoogleSignin from "../assets/Googlesignin.png";

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
            const userExists = newUserCheck(user.uid).then((userExists) => {
                console.log(`Does the user exist? ${userExists}`)
                if (!userExists){
                    const err = addUser(user.uid, user.displayName, user.email, "Alexia", "RK").then((userExists) => {
                        if (err){
                            //handle the error
                        }
                        else{
                            //continue code
                        }
                    });
                }
            });

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
        <p>Login</p>
        <div>
        </div>
        <h1>Hi! Welcome to Soar</h1>
        <div className="login">
        <form>
            <label>
               <input type="string" placeholder='Username'></input>

            </label>
            <label>
                <input type="password" placeholder='Password'></input>
            </label>
            <div>
            </div>
            <button>Submit</button>
        </form>
            {/* <Canvas>
                <Suspense fallback={null}>

                    <Model />
                </Suspense>
            </Canvas> */}
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
        </div>
    );
}

export default Login;