import { Link } from "react-router-dom";
//import reactLogo from './assets/react.svg'
import '../index.css'
import FeatherIcon from 'feather-icons-react';
import {auth} from './firebase';

// Signout function
const signOut = () => {
    auth.signOut();
};

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="appName">SOAR</h1>
        <div className="line">
          <div className="temp">
            <Link to='/Community' className="linkrouter"><li>Community</li></Link>
            </div>
            <div className="temp">
            <Link to='/Chat' className="linkrouter"><li>Chat</li></Link>
            </div>
          </div>
      <button className="power" onClick={signOut}>
        <FeatherIcon icon="power" />
      </button>
    </div>
  );
}

export default Navbar