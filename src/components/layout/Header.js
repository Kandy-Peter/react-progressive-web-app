import React from 'react';
import NetflixLogo from '../icons/NetflixLogo';
import { Link } from 'react-router-dom';
import Nav from './nav'

const Header = () => (
    <header className="header">
        <div id="logo" className="logo">
            <Link to='/'>
                <NetflixLogo />
            </Link>
            <Nav />
        </div>
    </header>
)

export default Header;