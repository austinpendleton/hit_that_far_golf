import Header from "./Header";
import NavBar from "./NavBar";
import ClubSection from "./ClubSection";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ClubCard from "./ClubCard";

const MyBag = ({ onAddClub, cards, handleOpenConfirmModal, onSelectClub }) => {
  const handleClubClick = (item) => {
    onSelectClub(item);
  };
  return (
    <>
      <button className="add__button" onClick={onAddClub}>
        Add clubs
      </button>
      <div className="clubs__container">
        <ClubSection
          cards={cards}
          onClick={handleOpenConfirmModal}
          onClubClick={handleClubClick}
        />
        {/* <section className="cards">
          <div className="clubs__title">My Bag:</div>
          <button className="add__button" onClick={onAddClub}>
            Add clubs
          </button>
          <ul className="clubs__list"></ul>
        </section> */}
      </div>
    </>
  );
};

export default MyBag;
