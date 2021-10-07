import axios from 'axios';
import './Mapp.css';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import  ReactMapGl, { Marker, Popup } from 'react-map-gl';
import MemoryMarkers from './components/MemoryMarkers';





export default function Map () {
	

    const [viewport, setViewport] = useState({
		latitude : 40.755333,
		longitude : -73.983933,
		width : "80vw",
		height : "100vh",
		zoom : 10
	})


	// Set up states for updating map 
	
    const [memories, setMemories] = useState([]);
	const [allMemories, setAllMemories] = useState([])
    const [headline, setHeadline] = useState('')


  
    // const getAllMemories = () =>{
    //     axios.get(`/api/memories`)
    //         .then(res => {
    //             console.log('data', res.data)
    //             setMemories(res.data)
    //             console.log('memories should be here: ',memories)
    //         })
    //         .catch(err => console.log(err));
    //         console.log ('Memories', memories)
            
    // }
  
    
    // useEffect(() => {
    //     getAllMemories();
    //     console.log ('Set Memories', memories)
        
    // }, [])

    const getUserMemories = () => {
        axios.get(`/api/memories`)
            .then(response => {
                console.log(response)
                setMemories(response.data)
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getUserMemories();
    }, [])

    
    console.log ('memerories: ', memories)
		return(
			<div>
			<ReactMapGl
           {...viewport}
           mapboxApiAccessToken = 'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ'
           mapStyle = "mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb"
           onViewportChange = {viewport => {
               setViewport(viewport)
           }}
           >
                
               
            <div>
                
            </div>

                <Marker
                    latitude= {40.748817}
                    longitude={-73.985428}
                >
                    <h1 class='tagline'>Hello ⛵️🏴‍☠️</h1>
                </Marker>
               
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
                </Popup> */}
    
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
                </Popup>

			{MemoryMarkers}
           </ReactMapGl>
		</div>  
        
	)
	
}

