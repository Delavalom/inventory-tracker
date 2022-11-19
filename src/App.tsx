import { useState } from 'react'
import Button from './components/ui/Button'
import Modal from './components/ui/Modal'
import { Inventory } from './functions/functions'


function App() {
  const inventory = Inventory.getInstance()
  const inventoryFunctions = ['Create', 'Update', 'Delete'];
  const [myFunction, setMyFunction] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="App">
      {openModal && <Modal displayInputOf={myFunction} openModal={setOpenModal} title={"Create"} />}
      <h1 className='text-5xl tracking-widest'>Inventory Tracker</h1>
      <main className='flex flex-col items-center h-screen w-full max-w-screen-lg mx-auto'>
        <div className="w-full flex justify-around my-5">
          {inventoryFunctions.map(inventoryFunction => (
            <Button key={inventoryFunction} onClick={() => {
              setMyFunction(inventoryFunction)
              setOpenModal(true)
            }} title={inventoryFunction} />
          ))}
        </div>
        {inventory.getInventory()}
      </main>
    </main>
  )
}

export default App
