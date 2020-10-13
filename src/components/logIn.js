import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header/Header';

const LogIn = ({ user, setUser }) => {

    // let token;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    console.log('username', username);
    console.log('password', password);
    if (user) {
        console.log('TOKEN', user.data.token);
    }

    const logIn = async (e) => {

        e.preventDefault();

        try {

            setUsername('');
            setPassword('');

            const params = {
                username : username,
                password : password
            }

            const res = await axios.post('http://localhost:3001/api/login', { params : params } );


            window.localStorage.setItem(
                'loggedUser', JSON.stringify(res)
              );
            setUser(res);
            console.log('ress', res.data);
        } catch (err) {
            console.log('err', err);
        }
    };

    const logOut = () => {
        window.localStorage.removeItem('loggedUser');
        setUser(null);
    };

    const onTest = async (e) => {
        e.preventDefault();

        const params = {
            un : 'un',
            pw : 'pw'
        }

        const config = {
            // headers: { Authorization: setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthcmFzIiwiaWQiOiI1ZjdmODdhNTczNTc4ZTM4MzQ3MzU4ZGUiLCJpYXQiOjE2MDI1MTI5NTl9.11cOms9e3GYZU-HftWso9PHARNFVDHQtIeX5-WfEMp8') },
            headers : { Authorization : setToken(user.data.token) }
        };

        const res = await axios.post('http://localhost:3001/api/test', { params : params }, config);
        if (res.status === 401) {
            console.log('a 401 status')
        }
        console.log('ress', res.data);
    };

    const setToken = newToken => {
        return `Bearer ${newToken}`
      }

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <Header /> 
        <form onSubmit={logIn}>
            <label>Username</label>
            <input type="text" value={username} onChange={changeUsername} />
            <label>Password</label>
            <input type="password" value={password} onChange={changePassword} />
            <input type="submit" name="Submit" />
        </form>
        <button name="testing" onClick={onTest}>test</button>
        <button onClick={logOut}>Log Out</button>
        </div>
    
    )
}

export default LogIn;