import { RxCross1 } from "react-icons/rx";
import "../../css/modal.css";
import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  setSavedName: (name: string) => void;
};

export default function Modal({ isOpen, onClose, setSavedName }: ModalProps) {
  if (!isOpen) return null;

  const [nameInput, setNameInput] = useState("");

  const handleSave = () => {
    setSavedName(nameInput);
    onClose(false);
  }

  return (
    <>
      <div className="overlay" onClick={() => onClose(false)}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="cross">
            <button onClick={() => onClose(false)}>
              <RxCross1
                style={{ color: "black", width: "20px", height: "20px" }}
              />
            </button>
          </div>
          <p>
            Привіт!
            <br />
            Ви потрапили на сайт інтерактивних ігор та завдань.
            <br />
            Надіємось, що вам сподобається і ви отримаєте позитивні емоції!
            <br />
            Бажаємо Вам гарно провести час!
          </p>
          <p>Введіть своє ім'я:</p>
          <div className="field">
            <input type="text" placeholder="Ваше ім'я" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
            <button type="submit" onClick={handleSave}>Зберегти</button>
          </div>
        </div>
      </div>
    </>
  );
}
