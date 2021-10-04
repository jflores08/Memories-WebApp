import { useState } from 'react'
import {signup} from '../Services/auth'
import axios from 'axios';

export default function SignUpPage(props) {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        signup(username, password)
        .then(response => {
            console.log(response);
            if(response.message){
                //reset the form
                setUsername('');
                setPassword('');

                //set the message
                setMessage(response.message);
            } else {

                props.setUser(response);

                props.history.push('/memories');
            }
            
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

            <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit">Sign Up</button>
                {message && (
                    <h3>{message}</h3>
                )}

            </form>

        </>
    )
}
