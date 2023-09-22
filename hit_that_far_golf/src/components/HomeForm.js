import "../blocks/HomeForm.css";

const HomeForm = () => {
  return (
    <div className="home__form-container">
      <div className="home__form-text-container">
        <p className="home__form-text">
          I am x yards to the flag, I should probably use x.
        </p>
      </div>
      <div className="home__form-text-container">
        <p className="home__form-text">I just hit my x about x yards.</p>
      </div>
    </div>
  );
};

export default HomeForm;
