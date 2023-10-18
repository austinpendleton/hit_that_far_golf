import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose, signIn, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!email || !password) {
      return;
    }
    const user = { email: email, password: password };
    signIn(user);
  };
  function onEmailChange(evt) {
    setEmail(evt.target.value);
  }
  function onPasswordChange(evt) {
    setPassword(evt.target.value);
  }

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      buttonText="Log in"
      onClick={onClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__labels">
        <label className="modal__label">
          Email
          <input
            className="modal__input"
            type="email"
            placeholder="Email"
            name="email"
            minLength="1"
            maxLength="30"
            required
            value={email}
            onChange={onEmailChange}
          />
        </label>

        <label className="modal__label">
          Password
          <input
            className="modal__input"
            type="password"
            placeholder="Password"
            name="password"
            minLength="1"
            required
            value={password}
            onChange={onPasswordChange}
          />
        </label>
      </div>
      <Link to="/signup" className="modal__link" onClick={openRegisterModal}>
        or Register
      </Link>
    </ModalWithForm>
  );
};

export default LoginModal;
