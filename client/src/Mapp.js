import axios from 'axios';
import './Mapp.css';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
import  ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';



//  // mapbox
//  const mapContainer = useRef(null);
//  const map = useRef(null);
//  const [zoom, setZoom] = useState(11);

//  // input field of address
//  const [location, setLocation] = useState("");
//  const [coordinates, setCoordinates] = useState([13.3983, 52.5124]);
//  let locationLng;
//  let locationLat;
//  let coord;

mapboxgl.accessToken =
'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ';


const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocoder = mbxGeocoding({ accessToken: mapboxgl.accessToken });




export default function Map () {
	

    const [viewport, setViewport] = useState({
		latitude : 40.755333,
		longitude : -73.983933,
		width : "80vw",
		height : "100vh",
		zoom : 10,
        pitch: 30
	})




    


	// Set up states for updating map 
	
    const [memories, setMemories] = useState([]);
	const [allMemories, setAllMemories] = useState([])
    const [headline, setHeadline] = useState('')



    const getAllMemories = () => {
        axios.get(`/api/memories`)
            .then(response => {
                console.log(response)
                setMemories(response.data)
                
                console.log ('title: ', response.data[3].location[0])
                
                
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getAllMemories();
    }, [])


    // useEffect(() => {
    //     getAllMemories();
    //     // initialize map only once
    //     if (map.current) return;
    //     map.current = new mapboxgl.Map({
    //       container: mapContainer.current,
    //       style: "mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb",
    //       center: [coordinates[0], coordinates[1]],
    //       zoom: zoom,
    //     });
    // })
    
    console.log ('memerories: ', memories)
   
		return( 
			<div>
			<ReactMapGl
           {...viewport}
           mapboxApiAccessToken = 'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ'
           mapStyle = "mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb"
          const map = {viewport => {
               setViewport(viewport)

               
           }}
           >
               
               
                {/* {memories.map((memory) => {
                            
                
                                const coords = memory.location[0];
                                const formattedCoords = JSON.parse(coords);
                                console.log(formattedCoords)
                            
                            return (
                               <Marker 
                               latitude={formattedCoords[0]} 
                               longitude={formattedCoords[1]}
                               >
                               
                               <p> <Link to={`/memories/${memory._id}`}>
                                     {memory.title}
                                </Link></p>

                               </Marker>
                            )
                        })}

                <Marker
                    latitude= {40.748817}
                    longitude={-73.985428}
                >
                    <h1 class='tagline'>Hello ⛵️🏴‍☠️</h1>
                </Marker> */}
               
                {/* <Popup
                   latitude= {latitudePop}
                   longitude={longitudePop}
                   
                    closeButton={true}
                    closeOnClick={false}
                  >
                   <div>
                       {<h1>hoy Mattie ⛵️🏴‍☠️</h1>}
                   </div>
​
                </Popup> */}
                
                {/* <Popup
                   latitude= {40.748817}
                   longitude={-73.985428}
                    maxwidth = {'50px'}
                    closeButton={true}
                    closeOnClick={false}
                  >
                   <div>
                       {<h5>hoy Mattie ⛵️🏴‍☠️</h5>}
                   </div>
​
                </Popup>
    
                <Popup
                   latitude= {52.4815}
                   longitude={13.4226}
                   
                    closeButton={true}
                    closeOnClick={false}
                  >
                   <div>
                       {<h1>hoy Mattie ⛵️🏴‍☠️</h1>}
                   </div>
​
                </Popup> */}

			
           </ReactMapGl>
		</div>  
        
	)
	
}


//  // Add the control to the map.
//  map.addControl(
//     new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
//     })
// );