import React from 'react'
import '../GroupChats.css'
import { useState } from 'react';
import ListComponent from './ListComponent';

const GroupChats = () => {
    //get data
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

  return (
    <div className="page">
        <div className="title"> 
            <p className="welcome">Welcome to the {groupName} community</p>
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
                    <button className="submit">Submit</button>
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
                    {inputValue}
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