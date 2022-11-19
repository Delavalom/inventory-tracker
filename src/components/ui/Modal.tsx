import { useState } from "react";
import { Inventory } from "../../functions/functions";
import Button from "./Button";
import Input from "./Input";

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
          amount: Number(input.amount),
        });
      }
    }
    if (displayInputOf === "Update") {
      if (input.id) {
        inventory.updateRecord(Number(input.id), {
          amount: Number(input.amount),
        });
      }
    }
    if (displayInputOf === "Delete") {
      if (input.id) {
        inventory.deleteRecord(Number(input?.id));
      }
    }
    openModal(false);
    inventory.getInventory();
  };

  return (
    <section className="w-screen h-screen fixed flex justify-center items-center">
      <div className="bg-black rounded-3xl px-5 py-4 min-w-[250px] flex flex-col justify-between h-1/4">
        <div className="flex justify-between">
          <h1 className="text-4xl">{title}</h1>
          <Button
            onClick={() => openModal(false)}
            className="rounded-full w-12 h-11"
            title="X"
          />
        </div>
        {displayInputOf === "Create" && (
          <div className="flex justify-center items-center gap-2">
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
          <div className="flex justify-center items-center gap-2">
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
          <div className="flex justify-center items-center gap-2">
            <Input
              props={recievedData}
              name="id"
              type="number"
              placeholder="ID"
            />
          </div>
        )}
        <Button onClick={() => callFunction()} title={displayInputOf} />
      </div>
    </section>
  );
};
export default Modal;
