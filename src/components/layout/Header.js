import React from 'react';
import NetflixLogo from '../icons/NetflixLogo';
import { Link } from 'react-router-dom';

const Header = () => (
    <div id="logo" className="logo">
        <Link to='/'>
            <NetflixLogo />
        </Link>
    </div>
)

export default Header;