import "../blocks/AddClubForm.css";
import ModalWithForm from "./ModalWithForm";
import { avgDistance } from "../utils/constants";
import { useEffect, useState } from "react";

// const AddClubForm = ({ onClose, onAddToBag, onSubmit }) => {
//   //   const [clubs] = useState("");
//   const [clubs, setClubs] = useState("");

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     onAddToBag({ clubs });
//   }

//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <button
//           type="button"
//           className="modal__button-close"
//           onClick={onClose}
//         ></button>
//         <h3 className="modal__title">Add clubs</h3>
//         {/* <p className="modal__text">Add a x to my bag.</p> */}
//         <div className="modal__radios">
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>Driver</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>3 wood</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>4 wood</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>5 wood</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>3 hybrid</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>4 hybrid</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>5 hybrid</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>9 iron</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>8 iron</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>7 iron</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>6 iron</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>5 iron</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>Pitching Wedge</label>
//           </div>
//           <div className="modal__radio">
//             <input
//               className="modal__radio-input"
//               type="radio"
//               value={clubs}
//               onChange={(e) => setClubs(e.target.value)}
//             />

//             <label>Sand Wedge</label>
//           </div>
//         </div>
//         <div className="modal__button-container">
//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="modal__button-submit"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

function AddClubForm({ onClose, isOpen, onAddClub }) {
  const [clubs, setClubs] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddClub({ clubs });
  }

  useEffect(() => {
    if (isOpen) {
      setClubs("");
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
            value={clubs}
            onChange={(evt) => {
              setClubs(evt.target.value);
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
