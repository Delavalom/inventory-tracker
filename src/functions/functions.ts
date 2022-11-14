import { RECORDS } from "../data/constants";
import { Record } from "../data/constants";
import { Base, UpdateRecord } from "../data/constants";

export class Inventory implements Base {
    static instance: Inventory | null = null
    private inventory: Record[] = RECORDS

    private constructor(){}

    static getInstance() {
        if(this.instance === null) {
            this.instance = new Inventory()
        }
        return this.instance
    }
    
    getInventory() {
        return this.inventory
    }
    createRecord(record: Record): Record[] {
        const getId = RECORDS.some(item => item.id === record.id)
        !getId ? this.inventory.push(record) : alert("ID already exist")
        return this.getInventory()
    }
    updateRecord (id: Record["id"], changes: UpdateRecord) {
        const getId = RECORDS.some(item => item.id === id)
        if (getId) {
            const index: number = RECORDS.findIndex(item => item.id === id)
            this.inventory[index].amount = changes.amount
        } else {
            alert("Not ID was Found")
        }
        return this.getInventory()
    };
    deleteRecord(id: Record['id']): Record[] {
        const getId = RECORDS.some(item => item.id === id)
        if (getId) {
            const index: number = RECORDS.findIndex(item => item.id === id)
            this.inventory.splice(index, 1)
        } else {
            alert("Not ID was Found")
        }
        return this.getInventory()
    }
}