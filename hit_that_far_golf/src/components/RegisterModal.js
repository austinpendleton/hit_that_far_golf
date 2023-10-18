import React from "react";
import { Link } from "react-router-dom";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ onClose, handleRegister, openLoginModal }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name,
    };
    handleRegister(user);
  };
  function onEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function onPasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function onNameChange(evt) {
    setName(evt.target.value);
  }

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  return (
    <ModalWithForm
      title="Sign Up"
      name="Signup"
      onClick={onClose}
      onSubmit={handleSubmit}
      buttonText="Next"
    >
      <div className="modal__labels">
        <label className="modal__label">
          Email*
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
          Password*
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
        <label className="modal__label">
          Name*
          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            name="name"
            minLength="1"
            maxLength="30"
            required
            value={name}
            onChange={onNameChange}
          />
        </label>
      </div>
      <Link to="/signin" className="modal__link" onClick={openLoginModal}>
        or Login
      </Link>
    </ModalWithForm>
  );
};
export default RegisterModal;
