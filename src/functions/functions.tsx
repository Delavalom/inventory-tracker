import { Record } from "../data/constants";
import { Base, UpdateRecord } from "../data/constants";
import RECORDS from "../data/records.json";


export class Inventory implements Base {
  static instance: Inventory | null = null;

  private constructor() {}

  static getInstance() {
    if (this.instance === null) {
      this.instance = new Inventory();
    }
    return this.instance;
  }

  getInventory() {
    return (
      <table className="w-full border border-separate border-spacing-2 border-slate-500">
        <thead>
          <tr>
            <th className="border-2 border-slate-500">Id</th>
            <th className="border-2 border-slate-500">Name</th>
            <th className="border-2 border-slate-500">Amount</th>
          </tr>
        </thead>
        <tbody>
          {RECORDS.map(record => (
            <tr key={record.id}>
              <td className="border-2 border-slate-500">{record.id}</td>
              <td className="border-2 border-slate-500">{record.name}</td>
              <td className="border-2 border-slate-500">{record.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  createRecord(record: Record) {
    const getId = RECORDS.some((item) => item.id === record.id);
    !getId ? RECORDS.push(record) : alert("ID already exist");
    return this.getInventory();
  }
  updateRecord(id: Record["id"], changes: UpdateRecord) {
    const getId = RECORDS.some((item) => item.id === id);
    if (getId) {
      const index: number = RECORDS.findIndex((item) => item.id === id);
      RECORDS[index].amount = changes.amount;
    } else {
      alert("Not ID was Found");
    }
    return this.getInventory();
  }
  deleteRecord(id: Record["id"]) {
    const getId = RECORDS.some((item) => item.id === id);
    if (getId) {
      const index: number = RECORDS.findIndex((item) => item.id === id);
      RECORDS.splice(index, 1);
    } else {
      alert("Not ID was Found");
    }
    return this.getInventory();
  }
}
