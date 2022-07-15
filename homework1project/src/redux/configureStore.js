import {combineReducers, createStore} from "redux";
import {countReducer} from "./reducers/countReducer/countReducer";
import {chatsReducer} from "./reducers/chatsReducer/chatsReducer";


const reducer = combineReducers(
    {
        count: countReducer,
        chats: chatsReducer
    }
);

export const store = createStore(reducer);