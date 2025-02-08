import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../Community.css'
import React from 'react';
import FeatherIcon from 'feather-icons-react';
import GroupChats from './GroupChats';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//arrow-up-right

import {auth, newPost, addPostToId, replyToPost } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Community = () => {
    const [user] = useAuthState(auth);
    const communityName = 'worldCommunity';

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/GroupChats');
    };

    let postId = "0";

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

  return (
    <div className="page">
        {/* <h1>Community</h1> */}
        <h1 className="communities">Communities</h1>
        <button onClick={post} className="post" type="button">
            Pretend you're posting
        </button>
        <button onClick={postReply} className="reply-to-post" type="button">
            Pretend you're replying
        </button>
        <div className="left">
            <div className="largeWidget"> 
                <div className="topLargeWidget">
                    <p className="largeName">Software Development</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget">
                    <div className="barsBottom">
                            <div className="descrip">20,000 members</div>
                            <div className="descrip"> Joined: 2/2/24</div>
                        </div>
                    </div>
                    <button className="launchbutton" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2">
                        <div className="bars">
                            <div className="descrip">15 members</div>
                            <div className="descrip"> Joined: 12/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" onClick={handleClick}>
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
                        <div className="barsBottom">
                            <div className="descrip">100 members</div>
                            <div className="descrip"> Joined: 3/6/24</div>
                        </div>
                    </div>
                    <button className="launchbutton" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2">
                        <div className="bars">
                            <div className="descrip">200 members</div>
                            <div className="descrip"> Joined: 1/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2">
                    <p className="largeName2">Software Development</p>
                </div>    
            </div>
        </div>
    </div>
  );
}
export default Community;

