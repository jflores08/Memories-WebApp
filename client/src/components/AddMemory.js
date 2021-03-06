import axios from "axios";
import { useState } from "react";

export default function AddMemory(props) {

    // console.log('location lat : ', props.location.coords.latitude);
    // console.log('location long: ', props.location.coords.longitude);


    // console.log('location cords: ', navigator.geolocation.getCurrentPosition(success, error));

    const api_URL = 'http://localhost:5005';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pic, setPic] = useState('');
    const [tagline, setTagline] = useState('');
    const [tags, setTags] = useState([]);
    const [location, setLocation] = useState([]);
    const [radius, SetRadius] = useState(1);
    const [likeCount, SetLikeCount] = useState(0);
    const [createdAT, setCreatedAt] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        // add pic
        const requestBody = { title, description, pic, tagline, radius };
        console.log(requestBody);
        axios.post(`/api/memories/add`, requestBody)

            .then(response => {
                setTitle('');
                setDescription('');
                setPic('');
                setTagline('');
                setTags();
                setLocation([]);
                SetRadius();
                SetLikeCount();
                setCreatedAt({});
                // console.log(props);
                props.refreshMemories();

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
