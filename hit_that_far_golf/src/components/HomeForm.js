import "../blocks/HomeForm.css";

const HomeForm = () => {
  return (
    <div className="home__form-container">
      <div className="home__form-text-container">
        <p className="home__form-text">
          I am{" "}
          <input
            className="home__input"
            type="number"
            placeholder="number"
          ></input>{" "}
          yards to the flag, I should probably use:
        </p>
      </div>
      <div className="home__button-container">
        <button className="modal__button-submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomeForm;
