import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <ul className='navbar'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Articles</li>
            <li className='nav-item'>Article</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>CMS</li>
        </ul>
    );
};

export default Navbar;