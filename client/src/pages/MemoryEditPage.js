import { useEffect, useState } from 'react'
import axios from 'axios';



export default function MemoryEditPage(props) {

    const api_URL = 'http://localhost:5005';

    const memoryId = props.match.params.id;

    const [memory, setMemory] = useState('');
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [tagline, setTagline] = useState('');

    useEffect(() => {
        axios.get(`${api_URL}/api/memories/${memoryId}`)
        .then(response =>{
            console.log(response);
            setMemory(response.data)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setPic(response.data.pic)
            setTagline(response.data.tagline)

        })
        .catch(err => console.log(err))
    }, [])

    const deleteMemory = () => {
        axios.delete(`${api_URL}/api/memories/${memoryId}`)
            .then(() => {
                props.history.push('/memories');
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = {title, description, pic, tagline };
        axios.put(`${api_URL}/api/memories/${memoryId}`, requestBody)
            .then(response => {
                props.history.push(`/memories/${memoryId}`);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
			{/* {memory && ( */}
                <>
                     <div>
          
                        <>
                            <h1>Imagine an Edit Page 🦄 🌈</h1>
                            <h3>Edit Memory</h3>
                                

                            <button onClick={deleteMemory}>Delete Memory 🗑</button>
                        </>
                    
                    </div>

                    <div>
                    <h3>Add Memory</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='title'>Title: </label>
                                <input

                                    type='text'
                                    name='title'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}

                                />

                                <br></br><br></br>

                            <label htmlFor='description'>Describe your Memory </label>
                            <br></br>
                                
                                <textarea 
                                id="description" 
                                type='text'
                                name="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                rows="5" 
                                cols="33"> It was a dark and stormy night...
                                </textarea>
                                <br></br><br></br>

                                <label htmlFor='pic'>Pic: </label>
                                <input

                                    type='text'
                                    name='pic'
                                    value={pic}
                                    onChange={e => setPic(e.target.value)}

                                />
                                <br></br><br></br>


                            <label htmlFor='tagline'>Tagline: </label>
                                <input

                                    type='tagline'
                                    name='tagline'
                                    value={tagline}
                                    onChange={e => setTagline(e.target.value)}

                                />

                                <button type='submit'>Update Memory</button>
                        </form>
                    
                </div>
                 </>
                 
             {/* )} */}
             
        </div>
       
    )
}
