import React from 'react';
import {auth, getMyQuizResults, getAllQuizResults } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Chat = () => {

    const [user] = useAuthState(auth);

    // Signout function
    const signOut = () => {
        auth.signOut();
    };

    const myQuizResults = async () => {
        const myResponse = await getMyQuizResults(user.uid);
        myResponse.forEach(function(item) {
            console.log(item);
          });

        // console.log(item);
        // const otherResponses = await getMyQuizResults(user.uid);
        // otherResponses.forEach(function(item) {
        //     console.log(item);
        //   });
    };
    
    return (
        <div>
            Welcome
            &nbsp;
            {auth.currentUser.email}
            <button onClick={signOut} className="sign-out" type="button">
                Sign Out
            </button>
            <button onClick={myQuizResults} className="myQuizResults" type="button">
                Pretend you're matching with a mentor
            </button>
        </div>
    );
}

export default Chat