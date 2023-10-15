import React from 'react';
import Count from "../presentational/Count";
import {getCount} from "../../redux/reducers/countReducer/countSelector";
import {useDispatch, useSelector} from "react-redux";


const CountPageContainer = () => {
    const myCount = useSelector(getCount);
    const myDispatch = useDispatch();


    return (
            <Count myCount={myCount} myDispatch={myDispatch}/>
    );
};

export default CountPageContainer;