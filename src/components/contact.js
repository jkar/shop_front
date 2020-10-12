import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header/Header';

const Contact = () => {

    // let token;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log('username', username);
    console.log('password', password);

    const onSubmit = async (e) => {

        e.preventDefault();

        const params = {
            username : username,
            password : password
        }

        const res = await axios.post('http://localhost:3001/api/login', { params : params } );
        console.log('ress', res.data);
        
    };

    const onTest = async (e) => {
        e.preventDefault();

        const params = {
            un : 'un',
            pw : 'pw'
        }

        const config = {
            headers: { Authorization: setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthcmFzIiwiaWQiOiI1ZjdmODdhNTczNTc4ZTM4MzQ3MzU4ZGUiLCJpYXQiOjE2MDI1MTI5NTl9.11cOms9e3GYZU-HftWso9PHARNFVDHQtIeX5-WfEMp8') },
          };

        const res = await axios.post('http://localhost:3001/api/test', { params : params }, config);
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
        <form onSubmit={onSubmit}>
            <label>Username</label>
            <input type="text" value={username} onChange={changeUsername} />
            <label>Password</label>
            <input type="text" value={password} onChange={changePassword} />
            <input type="submit" name="Submit" />
        </form>
        <button name="testing" onClick={onTest}>test</button>
        </div>
    
    )
}

export default Contact;