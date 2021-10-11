import React from 'react'
import axios from "axios";
import './ProfilePage.css'
import { useState, useEffect } from "react"
import AddMemory from '../components/AddMemory'
import MemoryCard from '../components/MemoryCard'
import UMap from '../components/UserMemoryMap';
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
    

    const getAllMemories = () => {
        axios.get(`/api/memories`)
            .then(response => {
                console.log('data is: ', response.data)
                const coords = response.data[0].location[0]
                const formattedCoords= JSON.parse(coords)
                console.log('coords is: ', coords)
                console.log('latatude is: ', formattedCoords[0])
                console.log('userId from database is: ', response.data.User)
                setMemories(response.data)
            
                // setUserMemories(memories.filter(filterUserId))
                console.log ('User Memories', memories)

            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getAllMemories();
    }, [])


    return (
        <div>
            <h1>{props.user.username}'s Profile Page</h1>

            <div id='userMemoryBody'>
            <AddMemory  refreshMemories={getAllMemories} />
            {userMemories.map(memory => <MemoryCard key={memory._id} {...memory} />)}
            </div>

             {/* <div id='map' style={{width: '100vw', height: '100vh'}}></div> */}
            <div id='mapbox'>
                    {/* <Map onStyleLoad={ el => this.map = el }/> */}
                    <UMap />
                </div>
        </div>
    )
}
