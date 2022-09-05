import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="/home">Home</a>
            <a href="/food">Food</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

export default Header;