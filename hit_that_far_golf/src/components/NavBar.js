import logo from "../images/app-logo-edit.svg";
import "../blocks/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="logo__container">
          <img className="logo" src={logo} />
        </div>
        <div className="navbar__buttons">
          <Link className="navbar__home" to="/">
            Home
          </Link>
          <Link className="navbar__bag" to="/mybag">
            My Bag
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
