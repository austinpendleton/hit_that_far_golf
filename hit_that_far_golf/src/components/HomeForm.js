import "../blocks/HomeForm.css";
import reset from "../images/reset-button.svg";
import React, { useEffect } from "react";

const HomeForm = ({
  handleYardageChange,
  handleSubmit,
  yardageInput,
  handleReset,
}) => {
  useEffect(() => {
    return () => {
      handleReset();
    };
  }, []);

  return (
    <div className="home__form-container">
      <form onSubmit={handleSubmit}>
        <div className="home__form-text-container">
          <p className="home__form-text">
            I am{" "}
            <input
              className="home__input"
              type="number"
              placeholder="number"
              value={yardageInput}
              onChange={handleYardageChange}
            ></input>{" "}
            yards to the flag, I should probably use:
          </p>
        </div>
        <div className="home__button-container">
          <button
            className="modal__button-submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="modal__button-reset"
            type="reset"
            onClick={handleReset}
          >
            <img src={reset} alt="reset" className="reset__button" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
