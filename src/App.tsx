import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'

import { Inventory } from './functions/functions'


function App() {
  const inventory = Inventory.getInstance()
  const inventoryFunctions = ['Create', 'Update', 'Delete'];
  const [myFunction, setMyFunction] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="App">
      {openModal && <Modal displayInputOf={myFunction} openModal={setOpenModal} title={"Create"} />}
      <h1>Inventory tracker</h1>
      <main className='mainContent'>
        <div className="buttonContainer">
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
