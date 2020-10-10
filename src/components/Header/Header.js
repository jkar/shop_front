import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    <nav>
        <h1 className="navbar"><Link to="/">Home </Link></h1>
        <h1 className="navbar"><Link to="/about">About Us </Link></h1>
        <h1 className="navbar"><Link to="/contact">Contact </Link></h1>
    </nav>
    )
}

export default Header;