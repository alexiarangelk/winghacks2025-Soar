import React from 'react';
import {auth} from './firebase';

const Chat = () => {

    // Signout function
    const signOut = () => {
        auth.signOut();
    };
    
    return (
        <div>
            Welcome
            &nbsp;
            {auth.currentUser.email}
            <button onClick={signOut} className="sign-out" type="button">
                Sign Out
            </button>
        </div>
    );
}

export default Chat;