import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    return (
        <Link to={to} {...props} style={{textDecoration: 'none', color: match? '#63fcb4' : '#61dafb', padding: '20px'}}>
            {children}
        </Link>
    );
};

export default CustomLink;