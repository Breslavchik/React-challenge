import { Item } from "./item.response";

export const SET_ITEM = 'item/SET_ITEM' as const;

export const setItem = (item: Item) => ({
  type: SET_ITEM,
  payload: item,
});

export const CHANGE_SUM_ITEM = 'item/CHANGE_SUM_ITEM' as const;

export const changeItemSum = (sum: number) => ({
  type: CHANGE_SUM_ITEM,
  payload: sum,
});

export type ItemAction =
  | ReturnType<typeof setItem>
  | ReturnType<typeof changeItemSum>;