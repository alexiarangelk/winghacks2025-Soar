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

import {auth, newPost, addPostToId, replyToPost, addToOrg, 
  getOrgPosts, getPostMessages } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Community = () => {
    
    const [user] = useAuthState(auth);
    const [orgName, setOrgName] = useState('University of Florida');

    const navigate = useNavigate();

    const handleClick = (event) => {
        const orgName = event.currentTarget.id;
        console.log(`our org name is ${orgName}`);
        navigate('/GroupChats', { state: { org: orgName } });
    };


    let postId = "0";

    let organization = 1;  //there's groups 1, 2, 3, 4

    // Organizations
    const organization1 = async () => {
      console.log(`${user.uid} is in University of Florida`);
      organization = 1;
      const postIdsArray = await getOrgPosts("University of Florida");
      for (let i = 0; i < postIdsArray.length ; i++){
        /* 
        fyi, the array looks like
        messageArray = [timestamp, username, subject, message], <-- only the first message
                        [timestamp, username, message],
                        ...
                        [timestamp, username, message]
        They are organized in order of when the message sent
        */
        const messageArray = await getPostMessages(postIdsArray[i]);
        for (let j = 0; j < messageArray.length ; j++){
          if (j == 0){
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const subject = messageArray[j].subject;
            const message = messageArray[j].message;
            console.log(`Initial Post: ${time}, ${username}, ${subject}, ${message}`);
          }
          else{
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const message = messageArray[j].message;
            console.log(`Reply Post: ${time}, ${username}, ${message}`);
          }
        }
      }
    };
    const organization2 = async () => {
      console.log(`${user.uid} is in JP Morgan Chase & Co.`);
      organization = 2;
      const postIdsArray = await getOrgPosts("JP Morgan Chase & Co.");
      for (let i = 0; i < postIdsArray.length ; i++){
        /* 
        fyi, the array looks like
        messageArray = [timestamp, username, subject, message], <-- only the first message
                        [timestamp, username, message],
                        ...
                        [timestamp, username, message]
        They are organized in order of when the message sent
        */
        const messageArray = await getPostMessages(postIdsArray[i]);
        for (let j = 0; j < messageArray.length ; j++){
          if (j == 0){
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const subject = messageArray[j].subject;
            const message = messageArray[j].message;
            console.log(`Initial Post: ${time}, ${username}, ${subject}, ${message}`);
          }
          else{
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const message = messageArray[j].message;
            console.log(`Reply Post: ${time}, ${username}, ${message}`);
          }
        }
      }
    };
    const organization3 = async () => {
      console.log(`${user.uid} is in BNY Mellon`);
      organization = 3;
      const postIdsArray = await getOrgPosts("BNY Mellon");
      for (let i = 0; i < postIdsArray.length ; i++){
        /* 
        fyi, the array looks like
        messageArray = [timestamp, username, subject, message], <-- only the first message
                        [timestamp, username, message],
                        ...
                        [timestamp, username, message]
        They are organized in order of when the message sent
        */
        const messageArray = await getPostMessages(postIdsArray[i]);
        for (let j = 0; j < messageArray.length ; j++){
          if (j == 0){
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const subject = messageArray[j].subject;
            const message = messageArray[j].message;
            console.log(`Initial Post: ${time}, ${username}, ${subject}, ${message}`);
          }
          else{
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const message = messageArray[j].message;
            console.log(`Reply Post: ${time}, ${username}, ${message}`);
          }
        }
      }
    };
    const organization4 = async () => {
      console.log(`${user.uid} is in Software Engineering`);
      organization = 4;
      const postIdsArray = await getOrgPosts("Software Engineering");
      for (let i = 0; i < postIdsArray.length ; i++){
        /* 
        fyi, the array looks like
        messageArray = [timestamp, username, subject, message], <-- only the first message
                        [timestamp, username, message],
                        ...
                        [timestamp, username, message]
        They are organized in order of when the message sent
        */
        const messageArray = await getPostMessages(postIdsArray[i]);
        for (let j = 0; j < messageArray.length ; j++){
          if (j == 0){
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const subject = messageArray[j].subject;
            const message = messageArray[j].message;
            console.log(`Initial Post: ${time}, ${username}, ${subject}, ${message}`);
          }
          else{
            const time = messageArray[j].timestamp;
            const username = messageArray[j].username;
            const message = messageArray[j].message;
            console.log(`Reply Post: ${time}, ${username}, ${message}`);
          }
        }
      }
    };

    // Post function
    const post = async () => {
        console.log(`${user.uid} is posting`);
        postId = await newPost(user.displayName, "helloooo", "subject ey");
        if (postId != "0"){
          let err = await addPostToId(user.uid, postId);

          if (organization == 1){
            err = await addToOrg("University of Florida", postId);
          }
          else if (organization == 2){
            err = await addToOrg("JP Morgan Chase & Co.", postId);
          }
          else if (organization == 3){
            err = await addToOrg("BNY Mellon", postId);
          }
          else if (organization == 4){
            err = await addToOrg("Software Engineering", postId);
          }
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
        <h1 className="communities">Your Communities</h1>
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
        <button onClick={organization4} className="organization4" type="button">
          Software Engineering
        </button>
        <div className="left">
            <div className="largeWidget"> 
                <div className="topLargeWidget" style={{background: "#43c6ac"}}>
                    <p className="largeName">University of Florida</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget" style={{background: "linear-gradient(185deg, #43c6ac 30%, #f8ffae"}}>
                    <div className="barsBottom">
                            <div className="descrip">20,000 members</div>
                            <div className="descrip"> Joined: 2/2/24</div>
                        </div>
                    </div>
                    <button className="launchbutton" onClick={handleClick} id="University of Florida">
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
            </div>
            <div className="largeWidget"> 
                <div className="bottomStyle">
                    <div className="topLargeWidget2" style={{background: "#4673b6"}}>
                        <div className="bars">
                            <div className="descrip">15 members</div>
                            <div className="descrip"> Joined: 12/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" id="" onClick={handleClick}>
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2" style={{background: "linear-gradient(185deg, #4673b6 30%,rgb(179, 247, 247)"}}>
                    <p className="largeName2">JP Morgan Chase & Co.</p>
                </div>    
            </div>
            <div className="largeWidget"> 
                <div className="topLargeWidget" style={{background: "#b6c1f6"}}>
                    <p className="largeName">BNY Mellon</p>
                </div>
                <div className="bottomStyle">
                    <div className="bottomLargeWidget" style={{background: "linear-gradient(180deg, #b6c1f6 30%,#9360bf"}}>
                        <div className="barsBottom">
                            <div className="descrip">100 members</div>
                            <div className="descrip"> Joined: 3/6/24</div>
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
                            <div className="descrip"> Joined: 1/1/24</div>
                        </div>
                    </div>
                    <button className="launchbutton2" onClick={handleClick} >
                        <FeatherIcon icon="arrow-up-right" />
                    </button>
                </div>
                <div className="bottomLargeWidget2" style={{background: "linear-gradient(185deg, #a7f4dd 35%, #105549"}}>
                    <p className="largeName2">Software Engineering</p>
                </div>    
            </div>
        </div>
    </div>
  );
}
export default Community;

