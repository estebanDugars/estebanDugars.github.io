import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <ul className='navbar'>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/Articles" className='nav-item'>Articles</Link>
            <Link to="/Article" className='nav-item'>Article</Link>
            <Link to="/About" className='nav-item'>About</Link>
            <Link to="/CMS" className='nav-item'>CMS</Link>
        </ul>
    );
};

export default Navbar;