import axios from "axios";
import { useState, useEffect } from "react"
import AddMemory from "../components/AddMemory";
import MemoryCard from "../components/MemoryCard";
import Map from '../Mapp'


export default function AltProfilePage(props) {


    const api_URL = 'http://localhost:5005';
    const [data, setData] = useState([]);
    const [memories, setmemories] = useState([]);
    const[userMemories, setUserMemories] = useState([]);
    let UserId = props.user._id

//Get User memories
    const getUserMemories = () => {
        axios.get(`/api/memories/user/${UserId}`)
            .then(response => {
                console.log('UserId: ', UserId)
                 console.log('response: ', response)
                 setData(response.data)  
               

            })
            .catch(err => console.log(err));

    }
                

    useEffect(() => {
        getUserMemories();
    }, [])




    console.log('The data is: ', data)
    console.log('fiilteredMemories: ', userMemories)
    


    return (
        <div>
            <h1>Alt Profile Page 🦄 🗺 🌈</h1>

            

            {data.map(memory => <MemoryCard key={memory._id} {...memory} />)}
            <br></br><br></br>

            <AddMemory refreshMemories={getUserMemories} />
            
        </div>
    )
}

