import { useState } from "react";
import { Inventory } from "../functions/functions";
import Button from "./Button";
import Input from "./Input";
import './Modal.css'

type ModalTyppe = {
  title: string;
  closeModal(isClose: boolean): void;
  displayInputOf: string;
};

const Modal = ({ title, closeModal, displayInputOf}: ModalTyppe) => {
  const [input, setInput] = useState<string | number>()
  const inventory = Inventory.getInstance()

  const callFunction = () => {
    if(displayInputOf === "Delete") {
      inventory.deleteRecord()
    }
  }

  return (
    <section className="modalBackground">
        <div className="modalContainer">
            <div className="headerContainer">
                <h1>{title}</h1>
                <button onClick={() => closeModal(false)} className="closeBtn">X</button>
            </div>
            {displayInputOf === 'Create' && (
              <div className="inputContainer">
                <Input onInput={(e) => setInput(e.target.value)} type="number" placeholder="ID" />
                <Input onInput={(e) => setInput(e.target.value)} type="text" placeholder="Name" />
                <Input onInput={(e) => setInput(e.target.value)} type="number" placeholder="Amount" />
              </div>
            )}
            {displayInputOf === 'Update' && (
              <div className="inputContainer">
                <Input onInput={(e) => setInput(e.target.value)} type="number" placeholder="ID" />
                <Input onInput={(e) => setInput(e.target.value)} type="number" placeholder="Amount" />
              </div>
            )}
            {displayInputOf === 'Delete' && (
              <div className="inputContainer">
                <Input onInput={(e) => setInput(e.target.value)} type="number" placeholder="ID" />
              </div>
            )}
            <div className="buttonContainer">
                <Button title={displayInputOf} />
            </div>
        </div>
    </section>
  );
};
export default Modal;
