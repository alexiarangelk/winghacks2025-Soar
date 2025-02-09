import React from 'react'
import '../GroupChats.css'
import { useState } from 'react';
import ListComponent from './ListComponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {auth, newPost, addPostToId, replyToPost, addToOrg, 
    getOrgPosts, getPostMessages } from './firebase';
  import {useAuthState} from 'react-firebase-hooks/auth';

const GroupChats = ({route}) => {
    //const {orgName} = route.params;
    //get data
    const location = useLocation();
    const [user] = useAuthState(auth);
    const { org } = location.state || {};
    const [showList, setShowList] = useState(false);
    const [topic, setTopic] = useState('Topic');
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
    const handleButtonClick = () => {
        setShowList(!showList);
    };
    const openTextBox = () => {
        setIsTextBoxVisible(true);
    };
    const handleCloseTextBox = () => {
        setIsTextBoxVisible(false);
    };

    const [inputValue, setInputValue] = useState('');
    const [inputSubject, setInputSubject] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubjectChange = (event) => {
        setInputSubject(event.target.value);
    };
    
    const[groupName, setGroupName] = useState('GroupName');
    const[convoName, setConvoName] = useState('How to network?');


    useEffect(() => {
        if (!org) {
            console.warn("Organization is missing!"); // Debugging message
            return;
        }

        const organization = async () => {
            console.log(`${user.uid} is in ${org}`);
            const postIdsArray = await getOrgPosts(org);
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
        organization();
    }, [org]);
    
    //post function
    let postId = "0";
    async function sendPost(){
        console.log(`${user.uid} is posting`);
        postId = await newPost(user.displayName, inputValue, inputSubject);
        if (postId != "0"){
        let err = await addPostToId(user.uid, postId);
        err = await addToOrg(org, postId);
        }
    }

  return (
    <div className="page">
        <div className="title"> 

            <p className="welcome">Welcome to the {org} community</p>
            <button className="add" onClick={openTextBox}>Add Post</button>
                {isTextBoxVisible && (
                    <div className="type-box">
                    <input
                        className="typeSubject"
                        type="text"
                        value={inputSubject}
                        onChange={handleSubjectChange}
                        placeholder="Post subject"
                    
                    />
                    <input
                        className="input-text"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter message here"
                    
                    />
                    <button className="cancel" onClick={handleCloseTextBox}>x</button>
                    <button className="submit" onClick={sendPost}>Submit</button>
                    </div>
                    // <div>
                    //   <input
                    //     type="text"
                    //     // value={textValue}
                    //     // onChange={handleTextBoxChange}
                    //   />
                    //   {/* <button onClick={handleCloseTextBox}>Close</button> */}
                    // </div>
                )}
                {/* {textValue && <p>Entered text: {textValue}</p>} */}
        </div>
        <div>
            <div className="conversations"> 
                <div className="topic">
                    <p className="convoName">{convoName}</p>
                    
                </div>
            </div>
            <button className="expand" onClick={handleButtonClick}>
                <p className="controls">{showList ? '-' : '+'}</p>
            </button>
            {showList && (
            <ul className="show">
                <p>{items.map((item, index) => (
                <li key={index}>{"Name: "}{item}</li>
            ))}</p>
            </ul>
            )}
        </div>
    </div>
  )
}


export default GroupChats