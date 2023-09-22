import Header from "./Header";
import NavBar from "./NavBar";

const MyBag = ({ onAddClub }) => {
  return (
    <>
      <div className="bag__container">
        <div className="bag__contents">
          <p>My Bag:</p>
          <button className="add__button" onClick={onAddClub}>
            Add clubs
          </button>
        </div>
      </div>
    </>
  );
};

export default MyBag;
