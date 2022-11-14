import Records from './records.json'

export interface Record {
    id: number;
    name: string;
    amount: number;
    // createAt: Date;
    // updateAt: Date;
}

export const RECORDS: Record[] = Records;

export interface UpdateRecord extends Omit<Record, 'id' | 'name'> {}

export interface Base {
    getInventory(): Promise<Record[]> | Record[];
    createRecord(record: Record): Promise<Record[]> | Record[];
    updateRecord(id: Record['id'], changes: UpdateRecord): Promise<Record[] | undefined> | Record[] | undefined;
    deleteRecord(id: Record['id']): Promise<Record[] | undefined> | Record[] | undefined;
}
