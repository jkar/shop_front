import React, {useState} from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const SignUp = ({ user, errorSuccessMessage, setErrorSuccessMessage, history }) => {

    const [name, SetName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {

        e.preventDefault();

        try {

            if (name === '' || username === '' || password === '') {
                setErrorSuccessMessage('Name , username or password are empty');
                setTimeout(() => {
                    setErrorSuccessMessage('');
                }, 3000);
                return
            }

            // const params = {
            //     name : name,
            //     username : username,
            //     password : password
            // }

            SetName('');
            setUsername('');
            setPassword('');

            const res = await axios.post('http://localhost:3001/api/user', { name : name, username : username, password : password });
            setErrorSuccessMessage('User is signed up successfuly');
            // history.push('/');
            setTimeout(() => {
                setErrorSuccessMessage('');
            }, 3000);
            console.log('ress', res.data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                setErrorSuccessMessage(err.response.data.msg);
                setTimeout(() => {
                    setErrorSuccessMessage('');
                }, 3000);
            }

        }
        
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
            { errorSuccessMessage !== '' ? <p>{errorSuccessMessage}</p> : null }
        </>
    )
};

export default SignUp;