import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = ({ user }) => {
    return (
    <nav>
        <h1 className="navbar"><Link to="/">Home </Link></h1>
        <h1 className="navbar"><Link to="/about">About Us </Link></h1>
        { user === null ? <h1 className="navbar"><Link to="/login">Log in </Link></h1> : null }
        { user === null ? <h1 className="navbar"><Link to="/signup">Sign up</Link></h1> : null }
        { user !== null ? <h1 className="navbar"><Link to="/formProduct">Create Product</Link></h1> : null}
        { user !== null ? <h1 className="navbar"><Link to="/editeDeleteProduct">Edit/Delete Product</Link></h1> : null}
    </nav>
    )
}

export default Header;