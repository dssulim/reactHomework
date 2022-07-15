import {CHAT_DELETE, CHATS_GET, CHAT_ADD} from "../../actionTypes";

const initialState = {
    chats: [
        {id: 1, name: 'family', messages: [{id: 1, name: 'mather', message: 'Hello everybody'}, {id: 2, name: 'father', message: 'Hello'}]},
        {id: 2, name: 'work', messages: [{id: 1, name: 'Anna_work', message: 'Hello everybody'}, {id: 2, name: 'Petter_work', message: 'Hello'}]},
        {id: 3, name: 'friends', messages: [{id: 1, name: 'friend1', message: 'Hello my friends'}, {id: 2, name: 'friend2', message: 'Hello everybody'}]},
        {id: 4, name: 'other', messages: [{id: 1, name: 'someOther1', message: 'Hello people'}, {id: 2, name: 'someOther2', message: 'Hi :)'}]}
    ]
};

export const chatsReducer = (state = initialState, action)=> {
    switch (action.type){
        case CHAT_ADD: return {...state, chats: [...state.chats, action.payload]};
        case CHAT_DELETE: return  {...state, chats: state.chats.filter((item)=> item.id !== action.payload)};
        case CHATS_GET: return {...state, chats: state.chats};
        default: return state;
    }
}