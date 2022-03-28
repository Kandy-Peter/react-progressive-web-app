import React from 'react';
import Header from './Header';
import Hero from './hero';

const Layout = ({children}) => (
    <div>
        <Header />
        <Hero />
        <div className="max-w-screen-xl m-auto mt-12" >
            {children}
        </div>
    </div>
)

export default Layout;