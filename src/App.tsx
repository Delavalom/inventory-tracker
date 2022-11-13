import './App.css'
import Button from './components/Button'
import Table from './components/Table'
import { getInventory, updateInventory } from './functions/functions'


function App() {
  return (
    <div className="App">
      <h1>Inventory tracker</h1>
      <div className="buttonContainer">
        <Button onClick={getInventory} title='Get' />
      </div>
      <Table />
    </div>
  )
}

export default App
