import React from 'react';
import NarcosLogo from '../../images/narcos.logo.png';
import NetflixBg from '../../images/netflix-background.png';

const Hero = () => (
    <div className="hero" id="hero">
        <div className="content">
            <img className="logo" src={NarcosLogo} alt="NarcosLogo"/>
            <h2>Season 2 now available</h2>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis
                quod.
            </p>
            <div className="button-wrapper">
                <a href="#" className="button-el">Watch Now</a>
                <a href="#" className="button-el">My List</a>
            </div>
        </div>
        <div className="overlay" style={{background: `url(${NetflixBg})`}}/>
    </div>
)

export default Hero;