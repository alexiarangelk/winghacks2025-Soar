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
    const [isReplyTextBoxVisible, setIsReplyTextBoxVisible] = useState(false);
    const handleButtonClick = () => {
        setShowList(!showList);
    };
    const openTextBox = () => {
        setIsTextBoxVisible(true);
    };
    const handleCloseTextBox = () => {
        setIsTextBoxVisible(false);
    };

    const openReplyTextBox = () => {
        setIsReplyTextBoxVisible(true);
    };
    const handleCloseReplyTextBox = () => {
        setIsReplyTextBoxVisible(false);
    };


    const [inputValue, setInputValue] = useState('');
    const [inputReplyValue, setInputReplyValue] = useState('');
    const [inputSubject, setInputSubject] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleReplyInputChange = (event) => {
        setInputReplyValue(event.target.value);
    };
    const handleSubjectChange = (event) => {
        setInputSubject(event.target.value);
    };
    
    const[groupName, setGroupName] = useState('GroupName');
    const[convoName, setConvoName] = useState('How to network?');


    //let postIdsArray = [];
    const [array, setIds] = useState([]);
    const [info, setItems] = useState([]);
    const [subjects, setSubjects] = useState([]);
    let tempArray = [];
    function addElement(subject) {
        setSubjects(prevItems => [...prevItems, subject]);

    }
    useEffect(() => {
        if (!org) {
            console.warn("Organization is missing!"); // Debugging message
            return;
        }

        const organization = async () => {
            console.log(`${user.uid} is in ${org}`);
            const postIdsArray = await getOrgPosts(org);
            setIds(postIdsArray);
            // size = postIdsArray.length; 
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
                addElement(subject);
                //setSubjects(prevItems => [...prevItems, subject]);
                //setItems(prevItems => [...prevItems, time]);
                setItems(prevItems => [...prevItems, username]);
                setItems(prevItems => [...prevItems, message]);
                // setItems(prevItems => [...prevItems, messageArray.length])
                tempArray.push(subject);
                tempArray.push(time);
                tempArray.push(username);
                tempArray.push(message);
                console.log(`Initial Post: ${time}, ${username}, ${subject}, ${message}`);
                }
                else{
                const time = messageArray[j].timestamp;
                const username = messageArray[j].username;
                const message = messageArray[j].message;
                console.log(`Reply Post: ${time}, ${username}, ${message}`);
                //setItems(prevItems => [...prevItems, time]);
                setItems(prevItems => [...prevItems, username]);
                setItems(prevItems => [...prevItems, message]);
                tempArray.push(time);
                tempArray.push(username);
                tempArray.push(message);
                }
            }
        }
        //setInfo(tempArray);

        };
        organization();
    }, [org]);
    

    //post function
    const [postId, setPostId] = useState("0");

    const sendPost = async () => {
        console.log(`${user.uid} is posting`);
        const newId = await newPost(user.displayName, inputValue, inputSubject);
        setPostId(newId);
        console.log(`${postId} is your new post`);
        if (newId != "0"){
        let err = await addPostToId(user.uid, newId);
        err = await addToOrg(org, newId);
        }
    }

    //reply function
    const postReply = async () => {
        console.log(`${user.uid} is replying to a pos ${postId}`);
        const err = await replyToPost(postId, user.displayName, inputReplyValue);
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

        <tbody>
            {subjects.map((topic, index) => (
                <div>
                <div className="conversations"> 
                     <div className="topic">
                         <p className="convoName">{topic}</p>
                     </div>
                 </div>
                 <button className="expand" onClick={handleButtonClick}>
                     <p className="controls">{showList ? '-' : '+'}</p>
                 </button>
                 {showList && (
                    <ul className="show">
                        <p><li key={index}>{"Name: "}{topic}</li></p>
                        <p><li key={index}>{"Name: "}{topic}</li></p>
                        <p><li key={index}>{"Name: "}{topic}</li></p>
                    </ul>
                    )}
                {/* {info.map((item, index) => ( */}
                    
                {/* <div>
                    <div className="conversations"> 
                        <div className="topic">
                            <p className="convoName">{topic++}</p>
                        </div>
                    </div>
                    <button className="expand" onClick={handleButtonClick}>
                        <p className="controls">{showList ? '-' : '+'}</p>
                    </button> */}
                    {/* {showList && (
                    <ul className="show">
                        <p>{items.map((item, index) => (
                        <li key={index}>{"Name: "}{item}</li>
                        ))}</p>
                    </ul>
                    )} */}
                {/* </div> */}
                </div>
                // ))} 
            ))} 
        </tbody>
        
        {/* <div>

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
        </div> */}
    </div>
  )
}


export default GroupChats