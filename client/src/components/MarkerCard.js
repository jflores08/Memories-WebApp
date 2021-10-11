import { Link } from 'react-router-dom';
import { Marker } from 'react-map-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function MarkerCard (props) {
    console.log('MarkerCard props are: ', props);

                

    return (
        

            <Marker 
                latitude= {props.latitude}
                longitude={props.longitude}
                >
                console.log('lat is: ', latitude)
                <Link to={`/memories/${props._id}`}>
                    <p>{props.title}</p>
                </Link>

            </Marker>
                
        
    )
}
