import "../blocks/AddClubForm.css";
import ModalWithForm from "./ModalWithForm";
import { useEffect, useState } from "react";

function AddClubForm({ onClose, isOpen, onAddClub }) {
  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [yards, setYards] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddClub({ name, yards: parseInt(yards), imageUrl });
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm title="Add club" onSubmit={handleSubmit} onClick={onClose}>
      <div className="modal__labels">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            placeholder="Club"
            name="name"
            minLength="1"
            maxLength="300"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          />
        </label>
        <label className="modal__label">
          Comfortable Hitting This Club
          <input
            className="modal__input"
            type="number"
            placeholder="Yards"
            value={yards}
            onChange={(evt) => {
              setYards(evt.target.value);
            }}
          />
        </label>
        <label className="modal__label">
          Image
          <input
            className="modal__input"
            type="url"
            placeholder="Image URL"
            name="name"
            minLength="1"
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddClubForm;
