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

const Community = () => {
    // [count, setCount] = useState(0)
    const communityName = 'worldCommunity';
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/GroupChats');
    };
  return (
    <div className="page">
        {/* <h1>Community</h1> */}
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
                    <button className="launchbutton" onClick={handleClick}>
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
                        were
                        were
                    </div>
                    <button className="launchbutton" onClick={handleClick}>
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
                    <button className="launchbutton2" onClick={handleClick}>
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

