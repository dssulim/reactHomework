import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Count = () => {
    const myCount = useSelector(state => state.count);
    const myDispatch = useDispatch();
    return (
        <div>
            CountPage.jsx <br/>
            <button onClick={()=>myDispatch({type: 'minus'})}>-</button>
            <div style={{padding: '5px'}}>
                {myCount}
            </div>
            <button onClick={()=>myDispatch({type: 'plus'})}>+</button>
        </div>
    );
};

export default Count;