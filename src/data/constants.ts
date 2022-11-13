import Records from './records.json'

export interface JsonData {
    id: number;
    name: string;
    amount: number;
    // createAt: Date;
    // updateAt: Date;
}

export const RECORDS: JsonData[] = Records;
