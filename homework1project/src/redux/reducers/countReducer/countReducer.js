import {COUNT_PLUS, COUNT_MINUS} from "../../actionTypes";

const initialState = {
    count: 0
};

export const countReducer = (state = initialState, action)=> {
    switch (action.type){
        case COUNT_PLUS: return {...state, count: state.count+1};
        case COUNT_MINUS: return {...state, count: state.count-1};
        default: return state;
    }
};