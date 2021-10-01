import { Link } from 'react-router-dom';

export default function MemoryListCard(props) {
    console.log(props);
    return (
        <div>
            <Link to={`/memories/${props._id}`}>
                 <h2>{props.title}</h2>
            </Link>

           
                 <p>{props.description}</p>
        </div>
    )
}
