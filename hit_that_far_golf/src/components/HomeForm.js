import "../blocks/HomeForm.css";
import AddClubForm from "./AddClubForm";

import React, { useState } from "react";

const HomeForm = () => {
  const [yardageInput, setYardageInput] = useState("");
  const [clubs, setClubs] = useState([]);
  const [recommendedClub, setRecommendedClub] = useState(null);

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

  const handleRecommendation = (yardageInput) => {
    let recommendedClub = null;
    for (const club of clubs) {
      if (yardageInput >= club.yards) {
        if (!recommendedClub || club.yards > recommendedClub.yards) {
          recommendedClub = club;
        }
      }
    }
    console.log("Recommended Club: ", recommendedClub);
    setRecommendedClub(recommendedClub); // Update the recommended club state
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
          <div>
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
            onClick={GolfClubRecommendation}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
