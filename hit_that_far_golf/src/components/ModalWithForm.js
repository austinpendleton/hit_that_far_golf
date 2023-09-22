import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add Club",
  title,
  onClick,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className={`modal__content modal__content_${name}`}>
        <button
          type="button"
          className="modal__button-close"
          onClick={onClick}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="modal__button-container">
            <button type="submit" className="modal__button-submit">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
