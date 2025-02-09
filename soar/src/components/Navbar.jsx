// import { NavLink, Link } from "react-router";

// function Header() {
//   return (
//     <nav>
//       {/* NavLink makes it easy to show active states */}
//       <NavLink
//         to="/Community"
//         className={({ isActive }) =>
//           isActive ? "active" : ""
//         }
//       >
//         Community
//       </NavLink>

//       <Link to="/concerts/salt-lake-city">Concerts</Link>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
//import reactLogo from './assets/react.svg'
import '../index.css'
import FeatherIcon from 'feather-icons-react';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>SOAR</h1>
        <div>
          <div className="temp">
            <Link to='/Community' className="linkrouter"><li>Community</li></Link>
            </div>
            <div className="temp">
            <Link to='/Chat' className="linkrouter"><li>Chat</li></Link>
            </div>
          </div>
      <button className="profile">
        <FeatherIcon icon="user" />
      </button>
    </div>
  );
}

export default Navbar