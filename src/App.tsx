import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'
import Table from './components/Table'


function App() {
  const inventoryFunctions = ['Create', 'Update', 'Delete'];
  const [myFunction, setMyFunction] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="App">
      {openModal && <Modal displayInputOf={myFunction} closeModal={setOpenModal} title={"Create"} />}
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
        <Table />
      </main>
    </main>
  )
}

export default App
