import { useState } from "react";
import { Inventory } from "../../functions/functions";
import { Button } from "./Button";
import { Input } from "./Input";

interface Props {
  title: string;
  openModal: (isClose: boolean) => void;
  displayInputOf: string;
}

export const Modal = ({ title, openModal, displayInputOf }: Props) => {
  const inventory = Inventory.getInstance();
  const [input, setInput] = useState<Record<string, string | number>>({});

  const recievedData = (fields: HTMLInputElement) => {
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
          name: input.name as string,
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
      <div className="bg-slate-800 rounded-3xl px-5 py-4 min-w-[250px] flex flex-col justify-between h-1/4">
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
        <Button onClick={() => callFunction()} title={displayInputOf}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="animate-spin h-5 w-5 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};
