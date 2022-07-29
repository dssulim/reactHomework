import React from 'react';

const Count = ({myCount, myDispatch}) => {
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