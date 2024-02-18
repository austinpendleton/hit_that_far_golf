import "../blocks/HomeForm.css";
import AddClubForm from "./AddClubForm";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomeForm = ({ handleRecommendation }) => {
  const [yardageInput, setYardageInput] = useState("");
  const [clubs, setClubs] = useState([]);
  const [recommendedClub, setRecommendedClub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setRecommendedClub(null);
    }
  }, [location.pathname]);

  function handleYardageChange(event) {
    setYardageInput(event.target.value);
  }

  function GolfClubRecommendation(event) {
    event.preventDefault();
    setRecommendedClub(recommendClub(yardageInput));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    GolfClubRecommendation(event);
    handleRecommendation(yardageInput);
    console.log("Form submitted");
  };

  const handleReset = () => {
    console.log("Before reset:", recommendedClub);
    setYardageInput("");
    setRecommendedClub(null);
    console.log("After reset:", recommendedClub);
  };

  const recommendClub = (yardageInput) => {
    let recommendedClub = null;
    for (const club of clubs) {
      if (yardageInput >= club.yards) {
        if (!recommendedClub || club.yards > recommendedClub.yards) {
          recommendedClub = club;
        }
      }
    }
    return recommendedClub;
  };

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
          <div className="recommended__club">
            {recommendedClub && (
              <div>
                <h3>{recommendedClub.name}</h3>
                <img
                  src={recommendedClub.imageUrl}
                  alt={recommendedClub.name}
                />
              </div>
            )}
          </div>
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
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
