import React from 'react';
import Header from './Header';

const Layout = ({children}) => (
    <div>
        <Header />
        <div className="max-w-screen-xl m-auto mt-12" >
            {children}
        </div>
    </div>
)

export default Layout;