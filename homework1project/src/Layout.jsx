import React from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header className={'App-header'}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/chats'}>CHATS</CustomLink>
                <CustomLink to={'/profile'}>PROFILE</CustomLink>
            </header>

            <main style={{paddingBottom: '165px'}}>
                <Outlet />
            </main>

            <footer style={{background: '#383d47', position: 'fixed', bottom: '0', width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8291af'}}>
                some footer
            </footer>
        </>
    );
};

export default Layout;