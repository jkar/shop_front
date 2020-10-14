import React, {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const SignUp = ({ user }) => {

    const [name, SetName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {

        e.preventDefault();

        const params = {
            name : name,
            username : username,
            password : password
        }

        const res = await axios.post('http://localhost:3001/api/user', { params : params } );
        console.log('ress', res.data);
        
    };

    const changeName = (e) => {
        SetName(e.target.value);
    };

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <Header user={user} />
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit} >
                <label>Name</label>
                <input type="text" value={name} onChange={changeName} />
                <label>Username</label>
                <input type="text" value={username} onChange={changeUsername} />
                <label>Password</label>
                <input type="password" value={password} onChange={changePassword} />
                <input type="submit" name="Submit" />
            </form>
        </>
    )
};

export default SignUp;