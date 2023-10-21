import "../blocks/ModalWithForm.css";
import closeButton from "../images/close-button.svg";

const DeleteConfirmModal = ({
  onDelete,
  item,
  _id,
  handleCloseConfirmModal,
  handleDeleteItem,
}) => {
  const onCancel = () => {
    handleCloseConfirmModal();
  };

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-delete">
        <button className="delete__confirmation-close" onClick={onCancel}>
          <img src={closeButton} alt="close-button" />
        </button>
        <div className="delete__text">
          <p className="delete__text-confirm">
            Are you sure you want to delete this item?
          </p>
        </div>
        <button
          className="delete__button_confirm"
          onClick={() => onDelete(item)}
          aria-label="Confirm"
          type="button"
        >
          Delete
        </button>
        <button
          className="delete__button_cancel"
          onClick={onCancel}
          aria-label="Cancel"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
