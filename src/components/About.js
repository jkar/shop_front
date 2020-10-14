import React from 'react';
import Header from './Header/Header';

const About = ({ user }) => {
    return (
        <div>
            <Header user={user} />
            <p>About</p>
        </div>
    )
}

export default About;