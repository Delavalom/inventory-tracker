import Records from './records.json'

export interface Record {
    id: number;
    name: string;
    amount: number;
    // createAt: Date;
    // updateAt: Date;
}

export const RECORDS: Record[] = Records;

export interface UpdateRecord extends Pick<Record, 'id'> {}

export interface Base {
    getInventory(): Promise<Record[]> | Record[];
    createRecord(record: Record): Promise<Record[]> | Record[];
    updateRecord(id: Record['id'], changes: UpdateRecord): Promise<Record[] | undefined> | Record[] | undefined;
    deleteRecord(id: Record['id']): Promise<Record[] | undefined> | Record[] | undefined;
}

export class Inventory implements Base {
    private inventory: Record[] = []
    static instance: Inventory | null = null

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
        return this.getInventory()
    }
    updateRecord(id: Record['id'], changes: UpdateRecord): Record[] {
        const index = this.inventory.findIndex(item => item.id === id)
        const prevData = this.inventory[index]
        this.inventory[index] = {...prevData, ...changes}
        return this.getInventory()
    }
    deleteRecord(id: Record['id']): Record[] {
        return this.getInventory()
    }
}