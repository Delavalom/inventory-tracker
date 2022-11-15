import { ReactElement } from 'react';
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
    getInventory(): Promise<Record[]> | Record[] | ReactElement;
    createRecord(record: Record): Promise<Record[]> | Record[] | ReactElement;
    updateRecord(id: Record['id'], changes: UpdateRecord): Promise<Record[] | ReactElement | undefined> | Record[] | undefined | ReactElement;
    deleteRecord(id: Record['id']): Promise<Record[] | ReactElement | undefined> | Record[] | undefined | ReactElement;
}
