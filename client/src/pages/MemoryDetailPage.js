import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function MemoryDetailPage(props) {

    const api_URL = 'http://localhost:5005';
    
    const [memory, setMemory] = useState(null);

    const memoryId = props.match.params.id;

    const getMemory = () => {
        axios.get(`/api/memories/${memoryId}`)
            .then(response => {
                console.log(response);
                setMemory(response.data);
            })
            .catch(err => console.log(err));
    }




    useEffect (() =>{
        getMemory();
    }, [])



    return (
        <div>
			{memory && (
                <>
                    <h1>{memory.title}</h1>
                    <p>{memory.description}</p>
                    <p>[{memory.latitude}, {memory.longitude}]</p>
                    
                    <Link to={`/memories/edit/${memory._id}`}>
                        <button>Edit Memory</button>
                    </Link>
                 </>
                 
             )}
             
        </div>
    )
}
