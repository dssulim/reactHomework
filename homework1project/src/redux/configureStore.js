import {combineReducers, createStore, applyMiddleware} from "redux";
import {countReducer} from "./reducers/countReducer/countReducer";
import {chatsReducer} from "./reducers/chatsReducer/chatsReducer";
import {/*logger,*/ createLogger} from "redux-logger/src";

// const myLogger = store => next => action => {
//     console.log('dispatching: ', action);
//     console.log('before: ', store.getState());
//     const result = next(action);
//     console.log('after: ', store.getState());
//
//     return result;
// };

const myLogger = createLogger({
    collapsed: false,
    level: 'log'
})

const time = store => next => action => {
    const delay = action?.meta?.delay;
    if(!delay){
        console.log('delay не найден');
        console.log(action);
        return next(action);
    }

    const timeOut = setTimeout(()=>next(action), delay);
    console.log('...please wait...');
    return () => {
        clearTimeout(timeOut);
    }
};


const rootReducer = combineReducers(
    {
        count: countReducer,
        chats: chatsReducer
    }
);

export const store = createStore(rootReducer, applyMiddleware(time, myLogger /*, logger*/));