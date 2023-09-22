import clubsCard from "./clubsCard";

const clubsSection = () => {
  return (
    <div className="clubs">
      <div className="clubs__container">
        <div className="clubs__title">My Bag:</div>
        <ul className="clubs__list">
          {clubs.map((clubs) => (
            <clubsCard />
          ))}
        </ul>
      </div>
    </div>
  );
};
