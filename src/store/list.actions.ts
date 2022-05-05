import { Item } from "./item.response";

export const SET_LIST_ITEM = 'listItem/SET_LIST_ITEM' as const;

export const setListItem = (list: Item[]) => ({
  type: SET_LIST_ITEM,
  payload: list,
});

export const CHANGE_LIST_ITEM = 'listItem/CHANGE_LIST_ITEM' as const;

export const changeListItem = (list: Item[]) => ({
    type: CHANGE_LIST_ITEM,
    payload: list,
  });

  export const CHANGE_FINAL_COST = 'listItem/CHANGE_FINAL_COST' as const;

export const changeFinalCost = (cost: number) => ({
    type: CHANGE_FINAL_COST,
    payload: cost,
  });

export type ListAction =
  | ReturnType<typeof setListItem>
  | ReturnType<typeof changeListItem>
  | ReturnType<typeof changeFinalCost>;