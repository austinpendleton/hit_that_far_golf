import "../blocks/Header.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Header = ({ onLoginModal, onRegisterModal, isLoggedIn, logOut }) => {
  const data = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header_title">
        <p className="header_text">I CAN HIT THAT FAR</p>
      </div>
      {isLoggedIn && (
        <div className="header__container">
          <div className="header__name">{data?.name || "Not Logged In"}</div>
          <button className="header__button" onClick={logOut}>
            Log Out
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className="button__containers">
          <button
            className="header__button"
            type="text"
            onClick={onRegisterModal}
          >
            Sign Up
          </button>
          <button className="header__button" type="text" onClick={onLoginModal}>
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
