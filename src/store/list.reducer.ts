import { Reducer } from "redux";
import { findAmount } from "../helpers.ts/math";
import { Item } from "./item.response";
import {
  CHANGE_FINAL_COST,
  CHANGE_LIST_ITEM,
  ListAction,
  SET_LIST_ITEM,
} from "./list.actions";

export interface ListState {
  itemList?: Item[];
  finalCost: number;
}

const initialState: ListState = {
  itemList: undefined,
  finalCost: 0,
};

export const ListReducer: Reducer<ListState | undefined, ListAction> = (
  state: ListState | undefined = initialState,
  action
) => {
  switch (action.type) {
    case SET_LIST_ITEM: {
      const cost = findAmount(action.payload);
      return {
        ...state,
        itemList: action.payload,
        finalCost: cost,
      };
    }
    case CHANGE_LIST_ITEM: {
      const cost = findAmount(action.payload);
      return {
        ...state,
        itemList: action.payload,
        finalCost: cost,
      };
    }
    case CHANGE_FINAL_COST: {
      return {
        ...state,
        finalCost: action.payload,
      };
    }
    default:
      return state;
  }
};
