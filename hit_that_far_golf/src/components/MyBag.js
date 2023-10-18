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
      <div className="clubs__container">
        <ClubSection
          cards={cards}
          onClick={handleOpenConfirmModal}
          onClubClick={handleClubClick}
        />
        <section className="cards">
          <ul className="clubs__list"></ul>
        </section>
        <button className="add__button" onClick={onAddClub}>
          Add clubs
        </button>
      </div>
    </>
  );
};

export default MyBag;
