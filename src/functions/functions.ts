import { RECORDS } from "../data/constants";
import { JsonData } from "../data/constants";

export const getInventory = async () => {
  await console.log(RECORDS)
};

export const updateInventory = async (id: JsonData['id']) => {
  const getId = await RECORDS.map(item => item.id === id)
  console.log(getId)
};
