import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'; //connected the style file for header

function Header() {
    return (
    <header>
        <h1>Matthew Welcome's Portfolio</h1>
        <nav>
        <NavLink to="/" activeClassName="active">About Me</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        </nav>
    </header>
    );
}

export default Header;
