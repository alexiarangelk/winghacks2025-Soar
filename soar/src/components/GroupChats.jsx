import React from 'react'
import '../GroupChats.css'
import { useState } from 'react';

const GroupChats = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

  return (
    <div>
        <p className="welcome">Welcome to [groupchat name]</p>
        <div className="conversations"> 
            {inputValue}
        </div>

        <div className="type-box">
            <input
                className="input-text"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter message here" />
            <button className="plus">
                +
            </button>
        </div>


    </div>
  )
}

export default GroupChats