import { RECORDS } from "../data/constants";
import { Record } from "../data/constants";
import { Base, UpdateRecord } from "../data/constants";

export class Inventory implements Base {
  static instance: Inventory | null = null;
  private inventory: Record[] = RECORDS;

  private constructor() {}

  static getInstance() {
    if (this.instance === null) {
      this.instance = new Inventory();
    }
    return this.instance;
  }

  getInventory() {
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
          {this.inventory.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  createRecord(record: Record) {
    const getId = this.inventory.some((item) => item.id === record.id);
    !getId ? this.inventory.push(record) : alert("ID already exist");
    return this.getInventory();
  }
  updateRecord(id: Record["id"], changes: UpdateRecord) {
    const getId = this.inventory.some((item) => item.id === id);
    if (getId) {
      const index: number = RECORDS.findIndex((item) => item.id === id);
      this.inventory[index].amount = changes.amount;
    } else {
      alert("Not ID was Found");
    }
    return this.getInventory();
  }
  deleteRecord(id: Record["id"]) {
    const getId = this.inventory.some((item) => item.id === id);
    if (getId) {
      const index: number = RECORDS.findIndex((item) => item.id === id);
      this.inventory.splice(index, 1);
    } else {
      alert("Not ID was Found");
    }
    return this.getInventory();
  }
}
