import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../Community.css'
import React from 'react';
import FeatherIcon from 'feather-icons-react';
//arrow-up-right

const Community = () => {
    // [count, setCount] = useState(0)
    const communityName = 'worldCommunity';
  return (
    <div className="page">
        {/* <h1>Community</h1> */}
        <h1 className="communities">Communities</h1>
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
                    <button className="launchbutton">
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
                        <div className="barsBottom">
                            <div className="descrip">100 members</div>
                            <div className="descrip"> Joined: 3/6/24</div>
                        </div>
                    </div>
                    <button className="launchbutton">
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
                    <button className="launchbutton2">
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

