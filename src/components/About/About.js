import React from 'react';
import Header from '../Header/Header';

const About = ({ user, logOut }) => {
    return (
        <div>
            <Header user={user} logOut={logOut} />
            <p>About</p>
        </div>
    )
}

export default About;