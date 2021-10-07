import axios from "axios";
import { useState, useEffect } from "react"
import AddMemory from "../components/AddMemory";
import MemoryCard from "../components/MemoryCard";
import Map from '../Mapp'


export default function AltProfilePage(props) {


    const api_URL = 'http://localhost:5005';

    const [memories, setmemories] = useState([]);
    const[filterMemories, setFilterMemories] = useState([]);
    let UserId = props.user._id


    const getUserMemories = () => {
        axios.get(`/api/memories`)
            .then(response => {
                console.log('response: ', response)
                const data=response.data
               const filtered = data.filter(
                    data.User === UserId
                )
                console.log(filtered)
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getUserMemories();
    }, [])

   

    return (
        <div>
            <h1>Alt Profile Page 🦄 🗺 🌈</h1>

            {filterMemories.map(memory => <MemoryCard key={memory._id} {...memory} />)}
            <br></br><br></br>

            <AddMemory refreshMemories={getUserMemories} />
            
        </div>
    )
}

