import { NavLink } from 'react-router-dom';
import '../../style/Navbar.css';
import logo from '../../assets/Img/logo.png';

const Navbar = () => (
  <nav className="navCont">
    <h1 className="navTitle">
      <img src={logo} alt="Logo" className="navLogo" />
      Space Travelers&apos; Hub
    </h1>
    <ul className="navUl">
      <li className="navLi"><NavLink to="/" exact="true" activeclassname="active">Rockets</NavLink></li>
      <li className="navLi"><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
      <li className="navLi"><NavLink to="/profile" activeclassname="active">My Profile</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
