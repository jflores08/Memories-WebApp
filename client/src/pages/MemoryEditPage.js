import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';



export default function MemoryEditPage(props) {

    const api_URL = 'http://localhost:5005';

    const memoryId = props.match.params.id;

    const [memory, setMemory] = useState('');
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [tagline, setTagline] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);
    const [radius, SetRadius] = useState(1);

    useEffect(() => {
        axios.get(`/api/memories/${memoryId}`)
        .then(response =>{
            console.log(response);
            setMemory(response.data)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setPic(response.data.pic)
            setTagline(response.data.tagline)
            setPrivacy(response.data.Private)
            setLatitude(response.data.latitude)
            setLongitude(response.data.longitude)
            SetRadius(response.data.radius)

        })
        .catch(err => console.log(err))
    }, [])

    const deleteMemory = () => {
        axios.delete(`/api/memories/${memoryId}`)
            .then(() => {
                props.history.push('/memories');
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = {title, description, pic, tagline, privacy, latitude, longitude, radius };
        axios.put(`/api/memories/${memoryId}`, requestBody)
            .then(response => {
                console.log('Private? ', privacy)
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

                                    type='text'
                                    name='tagline'
                                    value={tagline}
                                    onChange={e => setTagline(e.target.value)}

                                />

                            <label htmlFor='Privacy'>Private/Public: </label>
                                <select name ='Privacy' id ="Privacy">
                                    <option value={false}>Public</option>
                                    <option value={true}>Private</option>
                                    onChange={e => setPrivacy(e.target.value)}
                                </select>
                                
                                {/* <input

                                    type='text'
                                    name='tagline'
                                    value={tagline}
                                    onChange={e => setTagline(e.target.value)}

                                /> */}
                                <br></br><br></br>

                            <label htmlFor='radius'> Radius: </label>
                                <input

                                    type='number'
                                    name='radius'
                                    value={radius}
                                    onChange={e => SetRadius(e.target.value)}

                                />

                                <br></br><br></br>

                            <label htmlFor='latitude'> Latitude: </label>
                                <input

                                    type='array'
                                    name='latitude'
                                    value={latitude}
                                    onChange={e => setLatitude(e.target.value)}
                                />


                            <label htmlFor='longitude'> Longitude: </label>
                                <input

                                    type='array'
                                    name='longitude'
                                    value={longitude}
                                    onChange={e => setLongitude(e.target.value)}
                                />

                                <button type='submit'>Update Memory</button>
                        </form>
                    
                </div>
                 </>
                 
             {/* )} */}
             
        </div>
       
    )
}
