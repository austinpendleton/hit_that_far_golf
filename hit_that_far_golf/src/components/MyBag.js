import ClubSection from "./ClubSection";

const MyBag = ({ onAddClub, cards, handleOpenConfirmModal, onSelectClub }) => {
  const handleClubClick = (item) => {
    onSelectClub(item);
  };
  return (
    <>
      <div className="add__button-container">
        <button className="add__button" onClick={onAddClub}>
          Add clubs
        </button>
      </div>
      <div className="clubs__container">
        <ClubSection
          cards={cards}
          onClick={handleOpenConfirmModal}
          onClubClick={handleClubClick}
          onSelectClub={onSelectClub}
        />
      </div>
    </>
  );
};

export default MyBag;
