import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'
import Table from './components/Table'
import { Record } from './data/constants'
import { getInventory, updateRecord } from './functions/functions'


function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <main className="App">
      {openModal && <Modal closeModal={setOpenModal} title={"Create"} />}
      <h1>Inventory tracker</h1>
      <main className='mainContent'>
        <div className="buttonContainer">
          <Button onClick={() => setOpenModal(true)} title='Create' />
          <Button onClick={() => setOpenModal(true)} title='Update' />
          <Button onClick={() => setOpenModal(true)} title='Delete' />
        </div>
        <Table />
      </main>
    </main>
  )
}

export default App
