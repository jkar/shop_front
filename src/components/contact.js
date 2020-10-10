import React from 'react';
import Header from './Header/Header';

const Contact = () => {
    return (
        <div>
            <Header /> 
        <form>
            <label>Όνομα</label>
            <input type="text"/>
            <label>Επώνυμο</label>
            <input type="text"/>
        </form>
        </div>
    
    )
}

export default Contact;