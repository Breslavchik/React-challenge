import { Reducer } from "redux";
import { CHANGE_SUM_ITEM, ItemAction, SET_ITEM } from "./item.actions";
import { Item } from "./item.response";

export interface ItemState {
  item?: Item;
  sum: number;
}

const initialState: ItemState = {
  item: undefined,
  sum: 0,
};

export const ItemReducer: Reducer<
ItemState | undefined,
ItemAction
> = (state: ItemState | undefined = initialState, action) => {
  switch (action.type) {
    case SET_ITEM: {
        return {
          ...state,
          item: action.payload,
          sum: action.payload.sum,
        };
      }
    case CHANGE_SUM_ITEM: {
      return {
        ...state,
        sum: action.payload,
      };
    }
    default:
      return state;
  }
};