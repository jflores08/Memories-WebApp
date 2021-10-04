import axios from "axios";
import { useState } from "react";

export default function AddMemory(props) {

    const api_URL = 'http://localhost:5005';

    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [tagline, setTagline] = useState('');
    const [location, setLocation] = useState([]);
    const [radius, SetRadius] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();

        // add pic
        const requestBody = {title, description, pic, tagline };
            axios.post(`${api_URL}/api/memories`, requestBody)
                .then(response => {
                    setTitle('');
                    setDescription('');
                    setPic('');
                    setTagline('');
                    setLocation([]);
                    SetRadius();
                    console.log(props);
                    props.refreshMemories(props);
                    
                })
                .catch(err => console.log(err))

    }

	
    return (
        <div>
            <h3>Add Memory</h3>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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

                            type='file'
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
                        <br></br><br></br>

                    <label htmlFor='radius'> Radius: </label>
                         <input

                                    type='number'
                                    name='radius'
                                    value={radius}
                                    onChange={e => SetRadius(e.target.value)}

                        />

                        <button type='submit'>Add Memory</button>
                </form>
            
        </div>
    )
}
