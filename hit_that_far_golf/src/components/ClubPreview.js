import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";
import "../blocks/ClubPreview.css";

const ClubPreview = ({
  item,
  onClose,
  handleOpenConfirmModal,
  onDelete,
  data,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isUser = item.owner === currentUser._id;
  return (
    <div className="item__modal">
      <div className="item__modal-content">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        ></button>
        <img
          src={item?.link || item?.imageUrl || ""}
          className="item__modal-image"
          alt={item?.name}
        />
        <div className="item__modal-description">{item?.name}</div>

        {isUser && (
          <button
            className="modal__button-delete"
            onClick={handleOpenConfirmModal}
          >
            Delete Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ClubPreview;
