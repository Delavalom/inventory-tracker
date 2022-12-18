import { useState } from "react";
import { ImportFileBtn } from "./components/ImportFileBtn";
import { MainNavigation } from "./components/layout/MainNavigation";
import { Button } from "./components/ui/Button";
import { Modal } from "./components/ui/Modal";
import { SearchBar } from "./components/ui/SearchBar";
import { Inventory } from "./functions/functions";

function App() {
  const inventory = Inventory.getInstance();
  const inventoryFunctions = ["Create", "Update", "Delete"];
  const [myFunction, setMyFunction] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainNavigation>
      {openModal && (
        <Modal
          displayInputOf={myFunction}
          openModal={setOpenModal}
          title={myFunction}
        />
      )}
      <section className="flex justify-between w-full max-w-2xl space-x-8">
        <SearchBar />
        <div className="h-full w-[1px] bg-indigo-500 mx-1" />
        <ImportFileBtn />
      </section>
      <div className="w-full flex justify-around my-5">
        {inventoryFunctions.map((inventoryFunction) => (
          <Button
            key={inventoryFunction}
            onClick={() => {
              setMyFunction(inventoryFunction);
              setOpenModal(true);
            }}
            title={inventoryFunction}
          />
        ))}
      </div>
      {inventory.getInventory()}
    </MainNavigation>
  );
}

export default App;
