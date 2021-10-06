import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react"
import AddMemory from '../components/AddMemory'
import MemoryCard from '../components/MemoryCard'

export default function ProfilePage(props) {

    console.log('user is: ', props.user)
    

    // const [userId, setUserId] = useState();
    const [data, setData] = useState([]);
    const [memories, setMemories] = useState([]);
    const [userMemories, setUserMemories] = useState([]);

    let UserId = props.user._id

    console.log('user id from browser: ', UserId);

    function filterUserId(memory) {
        if (memory.User){
        return memory.User == UserId;
        }
     }
    

    const getUserMemories = () => {
        axios.get(`/api/memories`)
            .then(response => {
                console.log('data is: ', response.data)
                console.log('userId from database is: ', response.data.User)
                setMemories(response.data)
            
                setUserMemories(memories.filter(filterUserId))
                console.log ('User Memories', userMemories)

            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getUserMemories();
    }, [])


    return (
        <div>
            <h1>{props.user.username}'s Profile Page</h1>
            {userMemories.map(memory => <MemoryCard key={memory._id} {...memory} />)}
            <br></br><br></br>
            <AddMemory refreshMemories={getUserMemories} />
        </div>
    )
}
