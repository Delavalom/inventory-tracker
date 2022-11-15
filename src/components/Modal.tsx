import { useState } from "react";
import { Inventory } from "../functions/functions";
import Button from "./Button";
import Input from "./Input";
import "./Modal.css";

type ModalTyppe = {
  title: string;
  openModal: (isClose: boolean) => void;
  displayInputOf: string;
};

const Modal = ({ title, openModal, displayInputOf }: ModalTyppe) => {
  const inventory = Inventory.getInstance();
  const [input, setInput] = useState({
    id: 0,
    name: "",
    amount: 0,
  });

  const recievedData = (fields: any) => {
    setInput({
      ...input,
      [fields.name]: fields.value,
    });
  };

  const callFunction = () => {
    if (displayInputOf === "Create") {
      if (input.id) {
        inventory.createRecord({
          id: Number(input.id),
          name: input.name,
          amount: Number(input.amount)
        });
      }
    }
    if (displayInputOf === "Update") {
      if (input.id) {
        inventory.updateRecord(Number(input.id), {
          amount: Number(input.amount)
        });
      }
    }
    if (displayInputOf === "Delete") {
      if (input.id) {
        inventory.deleteRecord(Number(input?.id));
      }
    }
    openModal(false);
    inventory.getInventory()
  };

  return (
    <section className="modalBackground">
      <div className="modalContainer">
        <div className="headerContainer">
          <h1>{title}</h1>
          <button onClick={() => openModal(false)} className="closeBtn">
            X
          </button>
        </div>
        {displayInputOf === "Create" && (
          <div className="inputContainer">
            <Input
              props={recievedData}
              name="id"
              type="number"
              placeholder="ID"
            />
            <Input
              props={recievedData}
              name="name"
              type="text"
              placeholder="Name"
            />
            <Input
              props={recievedData}
              name="amount"
              type="number"
              placeholder="Amount"
            />
          </div>
        )}
        {displayInputOf === "Update" && (
          <div className="inputContainer">
            <Input
              props={recievedData}
              name="id"
              type="number"
              placeholder="ID"
            />
            <Input
              props={recievedData}
              name="amount"
              type="number"
              placeholder="Amount"
            />
          </div>
        )}
        {displayInputOf === "Delete" && (
          <div className="inputContainer">
            <Input
              props={recievedData}
              name="id"
              type="number"
              placeholder="ID"
            />
          </div>
        )}
        <div className="buttonContainer">
          <Button onClick={() => callFunction()} title={displayInputOf} />
        </div>
      </div>
    </section>
  );
};
export default Modal;
