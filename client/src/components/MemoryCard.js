import { Link } from 'react-router-dom';
import { useState } from "react";



export default function MemoryListCard(props) {
    const[privacy,setPrivacy] = useState('Test');
    // if (props.privacy){
    //     setPrivacy('Private')
    // } else{
    //     setPrivacy('Public')
    // }

    console.log('Memory Card props: ', props);
    return (
        <div>
            <Link to={`/memories/${props._id}`}>
                 <h2>{props.title}</h2>
            </Link>

           
                 <p>{props.description}</p>
                 <p>{props.privacy}</p>
        </div>
    )
}
