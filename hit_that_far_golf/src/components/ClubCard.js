import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/ClubCard.css";

const ClubCard = ({ item, onSelectClub, handleOpenConfirmModal, data }) => {
  const handleClubClick = () => {
    onSelectClub(item);
  };
  const currentUser = useContext(CurrentUserContext);

  const isUser = item?.owner === currentUser._id;

  return (
    <div className="card">
      <img
        className="card__image"
        src={item?.link || item?.imageUrl}
        alt={item?.name}
        onClick={handleClubClick}
      />

      <div className="card__container">
        <div className="card__name">{item?.name}</div>
        <div className="card__name">{item?.yards} yards</div>
        {/* {isUser && (
          <button className="card__trash" onClick={handleOpenConfirmModal}>
            DELETE
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ClubCard;
