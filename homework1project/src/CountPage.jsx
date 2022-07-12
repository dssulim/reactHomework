import React from 'react';

import {createStore} from "redux";
import {Provider} from "react-redux";
import Count from "./Count";

const initialState = {
    count: 0
};
const reducer = (state = initialState, action)=> {
    switch (action.type){
        case 'plus': return {...state, count: state.count+1};
        case 'minus': return {...state, count: state.count-1};
        default: return state;
    }
};
const store = createStore(reducer);


const CountPage = () => {


    return (
        <Provider store={store}>
            <Count/>
        </Provider>
    );
};

export default CountPage;