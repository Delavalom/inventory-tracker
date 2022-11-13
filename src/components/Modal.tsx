import Button from "./Button";
import './Modal.css'

type ModalTyppe = {
  title: string;
  closeModal(isClose: boolean): void;
};

const Modal = ({ title, closeModal }: ModalTyppe) => {
  return (
    <section className="modalBackground">
        <div className="modalContainer">
            <div className="headerContainer">
                <h1>{title}</h1>
                <button onClick={() => closeModal(false)} className="closeBtn">X</button>
            </div>
            <div className="inputContainer">
                <input type="number" placeholder='ID' />
                <input type="text" placeholder='Name' />
                <input type="number" placeholder='Amount' />
            </div>
            <div className="buttonContainer">
                <Button title="Create" />
                <Button title="Update" />
                <Button title="Delete" />
            </div>
        </div>
    </section>
  );
};
export default Modal;
