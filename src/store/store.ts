import { combineReducers, createStore } from "redux";
import { ListReducer, ListState } from "./list.reducer";

export interface AppState {
    ListState: ListState|undefined;
}

const reducer=combineReducers<AppState>({
    ListState:ListReducer
})

export const store=createStore(reducer);



