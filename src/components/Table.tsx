import { useEffect } from "react";
import { getInventory } from "../functions/functions";

const Table = () => {
  const records = getInventory();

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
