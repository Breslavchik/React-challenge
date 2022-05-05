import { combineReducers, createStore, Store } from "redux";
import { ItemReducer, ItemState } from "./item.reducer";
import { ListReducer, ListState } from "./list.reducer";



export interface AppState {
    ListState: ListState|undefined;
    ItemState: ItemState|undefined;
}

const reducer = combineReducers<AppState>({
    ListState: ListReducer,
    ItemState: ItemReducer
});

export const store=createStore(reducer);

