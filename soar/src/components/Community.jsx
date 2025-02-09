import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../Community.css'
import React from 'react';
import FeatherIcon from 'feather-icons-react';
//arrow-up-right

import {auth, newPost, addPostToId, replyToPost } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Community = () => {
    const [user] = useAuthState(auth);
    const communityName = 'worldCommunity';
    let postId = "0";
    let group = 1;  //there's groups 1, 2, and 3

    // Post function
    const post = async () => {
        console.log(`${user.uid} is posting`);
        postId = await newPost(user.displayName, "helloooo");
        if (postId != "0"){
          const err = await addPostToId(user.uid, postId);
        }
    };

    // Reply function
    const postReply = async () => {
      console.log(`${user.uid} is replying to a post`);
      const err = await replyToPost(postId, user.displayName, "helloooo");
    };

    // Groups
    const group1 = async () => {
      console.log(`${user.uid} is in group1`);
    };
    const group2 = async () => {
      console.log(`${user.uid} is in group2`);
    };
    const group3 = async () => {
      console.log(`${user.uid} is in group3`);
    };

  return (
    <div className="page">
        <button onClick={post} className="post" type="button">
            Pretend you're posting
        </button>
        <button onClick={postReply} className="reply-to-post" type="button">
            Pretend you're replying
        </button>
        <button onClick={group1} className="group1" type="button">
            Back-End Programming Group
        </button>
        <button onClick={group2} className="group2" type="button">
            McDonalds
        </button>
        <button onClick={group3} className="group3" type="button">
            WingHacks
        </button>
        <div className="left">
            <div className="largeWidget"> 
                <div className="topLargeWidget">
                    <p className="largeName">Software Development</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget">
                        were
                        were
                    </div>
                    <button className="launchbutton">
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2">
                        were
                        were
                    </div>
                    <button className="launchbutton2">
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2">
                    <p className="largeName2">Software Development</p>
                </div>    
            </div>
            <div className="largeWidget"> 
                <div className="topLargeWidget">
                    <p className="largeName">Leadership</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget">
                        were
                        were
                    </div>
                    <button className="launchbutton">
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2">
                        were
                        were
                    </div>
                    <button className="launchbutton2">
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2">
                    <p className="largeName2">Software Development</p>
                </div>    
            </div>
            {/* <div className="smallWidget"> 
                    <div className="topSmallWidget">
                        <p className="smallName">Software Engineering</p>
                    </div>
                    <div className="bottomStyle">
                        <div className="bottomSmallWidget">
                            were
                            were
                        </div>
                        <button className="launchbuttonSmall">
                            <FeatherIcon icon="arrow-up-right" />
                        </button>
                    </div>
            </div> */}
            
        {/* <div className="largeWidget"> 
            <div className="topLargeWidget">
                <p className="largeName">Software Development</p>
            </div>
            <div className="bottomStyle">
                <div className="bottomLargeWidget">
                    were
                    were
                </div>
                <button className="launchbutton">
                    <FeatherIcon icon="arrow-up-right" />
                </button>
            </div>
        </div> */}
        </div>
    </div>
  );
}
export default Community;

