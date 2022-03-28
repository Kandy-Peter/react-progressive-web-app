import React from 'react';
import NetflixLogo from '../icons/NetflixLogo';
import { Link } from 'react-router-dom';
import Nav from './nav';
import NetflixLog from '../../images/netflix-logo.png';

const Header = () => (
    <header className="header">
        <div id="logo" className="logo">
        <Link to="/">
          <NetflixLogo/>
        </Link>
        </div>
        <Nav/>
        <div className='user-profile'>
            <div className="user">
                <p className="name">Kandy Peter</p>
                <div className="image">
                    <img src={NetflixLog} alt='netflix'/>
                </div>
            </div>
        </div>
    </header>
)

export default Header;