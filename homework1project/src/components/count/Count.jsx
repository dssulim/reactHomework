import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCount} from "../../redux/reducers/countReducer/countSelector";

const Count = () => {
    const myCount = useSelector(getCount);
    const myDispatch = useDispatch();
    return (
        <div>
            CountPage.jsx <br/>
            <button onClick={()=>myDispatch({type: 'COUNT_MINUS'})}>-</button>
            <div style={{padding: '5px'}}>
                {myCount}
            </div>
            <button onClick={()=>myDispatch({type: 'COUNT_PLUS'})}>+</button>
        </div>
    );
};

export default Count;