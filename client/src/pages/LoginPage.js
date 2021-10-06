import React from 'react'
import { useState } from 'react';
import { login } from '../Services/auth';

export default function LoginPage(props) {
    
        const[username, setUsername] = useState('');
        const[password, setPassword] = useState('');
        const[message, setMessage] = useState('');
    
        const handleSubmit = e => {
            e.preventDefault();
            login(username, password)
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
    
                    props.history.push('/memories/profile');
                }
                
            })
            .catch(err => console.log(err));
        }
    
        return (
            <>
                <h1>Log In</h1>
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
    
                    <button type="submit">Log In 🗝</button>
                    {message && (
                        <h3>{message}</h3>
                    )}
    
                </form>
    
            </>
        )
    
}
