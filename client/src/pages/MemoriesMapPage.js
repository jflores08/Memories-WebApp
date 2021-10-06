import axios from "axios";
import { useState, useEffect } from "react"
import AddMemory from "../components/AddMemory";
import MemoryCard from "../components/MemoryCard";


export default function MemoriesMapPage() {

    
    const api_URL = 'http://localhost:5005';
    
    const [memories, setmemories] = useState([]);

    const getUserMemories = () => {
        axios.get(`/api/memories`)
        .then(response => {
            console.log(response)
            setmemories(response.data)
        })
        .catch(err => console.log(err));

    }

    useEffect(() =>{
        getUserMemories();
    }, [])

    return (
        <div>
            <h1>Imagine a Memory Map 🦄 🗺 🌈</h1>

            {memories.map(memory => <MemoryCard key={memory._id} {...memory}/>)}
            <br></br><br></br>

            <AddMemory refreshMemories={getUserMemories} />
        </div>
    )
}

