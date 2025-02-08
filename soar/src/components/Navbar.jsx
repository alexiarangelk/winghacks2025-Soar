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
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img src={reactLogo} alt="" width="130px"/> */}
      <ul>
        <Link to='/'><li>Community</li></Link>
        <Link to='/Chat'><li>Chat</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
}

export default Navbar