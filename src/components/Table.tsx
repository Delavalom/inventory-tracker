import { useEffect } from "react";
import { Inventory } from "../functions/functions";

const Table = () => {
  
  useEffect(() => {
    const inventory = Inventory.getInstance()
    inventory.getInventory()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15</td>
          <td>papel</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );

};

export default Table;
