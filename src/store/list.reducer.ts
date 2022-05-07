import { Reducer } from "redux";
import { calcTotalAmount } from "../helpers/Math"
import { Item } from "./item.response";
import {
  CHANGE_FINAL_COST,
  CHANGE_ITEM_SUM,
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
      const cost = calcTotalAmount(action.payload);
      return {
        ...state,
        itemList: action.payload,
        finalCost: cost,
      };
    }
    case CHANGE_LIST_ITEM: {
      const cost = calcTotalAmount(action.payload);
      return {
        ...state,
        itemList: action.payload,
        finalCost: cost,
      };
    }
    case CHANGE_ITEM_SUM: {
      const newItemList=state.itemList
      const index=newItemList?.findIndex(item=>item.id===action.payload.id);
      newItemList?.splice(index!, 1, action.payload);
      const cost = calcTotalAmount(newItemList!);
      return {
        ...state,
        itemList: newItemList,
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
