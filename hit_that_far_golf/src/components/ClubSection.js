import React from "react";
import ClubCard from "./ClubCard";
import "../blocks/ClubSection.css";

const ClubSection = ({ cards, onClubClick, handleOpenConfirmModal }) => {
  return (
    <div className="clubs">
      <div className="clubs__container">
        <div className="clubs__title">My Bag:</div>
        <ul className="clubs__list">
          {cards.map((card) => (
            <ClubCard
              key={card?._id || card?.id}
              item={card}
              onSelectClub={onClubClick}
              onClick={handleOpenConfirmModal}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClubSection;
