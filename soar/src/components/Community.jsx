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
    let group = 1;  //there's groups 1, 2, and 3

    // Post function
    const post = async () => {
        console.log(`${user.uid} is posting`);
        postId = await newPost(user.displayName, "helloooo", "subject ey");
        if (postId != "0"){
          const err = await addPostToId(user.uid, postId);
        }
    };

    // Reply function
    const postReply = async () => {
      console.log(`${user.uid} is replying to a post`);
      const err = await replyToPost(postId, user.displayName, "I am a reply");
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
        {/* <h1>Community</h1> */}
        <h1 className="communities">Communities</h1>
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
                <div className="topLargeWidget" style={{background: "#43c6ac"}}>
                    <p className="largeName">Software Development</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget" style={{background: "linear-gradient(185deg, #43c6ac 30%, #f8ffae"}}>
                    <div className="barsBottom">
                            <div className="descrip">20,000 members</div>
                            <div className="descrip">Joined: 2/2/24</div>
                        </div>
                    </div>
                    <button className="launchbutton" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2" style={{background: "#4673b6"}}>
                        <div className="bars">
                            <div className="descrip">15 members</div>
                            <div className="descrip">Joined: 12/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2" style={{background: "linear-gradient(185deg, #4673b6 30%,rgb(179, 247, 247)"}}>
                    <p className="largeName2">Software Development</p>
                </div>    
            </div>
            <div className="largeWidget"> 
                <div className="topLargeWidget" style={{background: "#b6c1f6"}}>
                    <p className="largeName">Leadership</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget" style={{background: "linear-gradient(185deg, #b6c1f6 30%, #ffc3a0"}}>
                        <div className="barsBottom">
                            <div className="descrip">100 members</div>
                            <div className="descrip">Joined: 3/6/24</div>
                        </div>
                    </div>
                    <button className="launchbutton" onClick={handleClick} >
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2" style={{background: "#a7f4dd"}}>
                        <div className="bars">
                            <div className="descrip">200 members</div>
                            <div className="descrip">Joined: 1/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" onClick={handleClick} >
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2" style={{background: "linear-gradient(185deg, #a7f4dd 35%, #105549"}}>
                    <p className="largeName2">Software Development</p>
                </div>    
            </div>
        </div>
    </div>
  );
}
export default Community;

