import { RECORDS } from "../data/constants";
import { Record } from "../data/constants";

export const getInventory = (): Record[] | undefined => {
  return RECORDS;
};

export const createRecord = (id: Record["id"]) => {
  const getId = RECORDS.map((item) => item.id === id);
  console.log(getId);
};
export const updateRecord = (id: Record["id"]) => {
  const getId = RECORDS.map((item) => item.id === id);
  console.log(getId);
};
export const deleteRecord = (id: Record["id"]) => {
  const getId = RECORDS.map((item) => item.id === id);
  console.log(getId);
};
