import axios from 'axios';
import './Mapp.css';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import  ReactMapGl, { Marker, Popup } from 'react-map-gl';

const mapAccessToken = process.env.MAPBOX_TOKEN
console.log('Token: ', mapAccessToken)
// Sample data 
const data = [
	{
		"Title": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"location": [-73.9516030004786,40.72557300071668],
	},
	{
		"Title": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"location": [-73.98393399979334,40.75533300052329],
	},
	{
		"Title": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"location": [-73.9882730001973,40.718207001246554],
	}
]



export default function Map (props) {
	
	// Set up states for updating map 
	const [lng, setLng] = useState(-74);
	const [lat, setLat] = useState(40.7128);
	const [zoom, setZoom] = useState(10);
	const [allMemories, setAllMemories] = useState([])
	const [clickedEvent, setClickedEvent] = useState(null)
    const [hoveredEvent, setHoveredEvent] = useState(null)
    const [clickedFilterMenu, setClickedFilterMenu] = useState(false)
	const [viewport, setViewport] = useState({
		latitude : 40.755333,
		longitude : -73.983933,
		width : "100vw",
		height : "100vh",
		zoom : 10
	})

    const openFilterMenu = (e) => {
       e.preventDefault()
       setClickedFilterMenu(true)
    }
    const closeFilterMenu = (e) => {
        e.preventDefault()
        setClickedFilterMenu(false)
    }
	
	// const center = [-73.98393399979334,40.75533300052329]

	 
	
		const getAllMemories = () => {
			        axios.get(`/api/memories`)
			             .then(res => {
                            
			                 setAllMemories(res.data)
			             })
			             .catch(err => console.log(err))
			    }

	useEffect(() => {
        getAllMemories()
    }, [])

	// Create map and lay over markers

        // const center = [13.4532321, 52.5331092]
		

       


       
    
        
       
        // const currentZoom = map.getZoom();
        // console.log('The current zoom is: ', currentZoom);

        const message = <p>hoy Mattie ⛵️🏴‍☠️</p>
         const latitudePop = 53.4815
		 const longitudePop = 14.4226

        
				
     	
		// data.forEach((location) => {
		// 	console.log(location)
		// 	// var marker = new mapboxgl.Marker()
		// 				popup.setLngLat(location.location)
		// 					// .setPopup(new mapboxgl.Popup({ offset: 30 })
		// 					.setHTML('<h4>' + location.city + '</h4>' + location.Title)
        //                     .setMaxWidth('100px')
		// 					.addTo(map);

		// })
	

	
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
                
               {/* const allMemories.map(memory => {

                const coords = memory.location[0];
                const formattedCoords = JSON.parse(coords);
                const [headline, setHeadline] = useState('');
                if  (tagline){
                        setHeadline(memory.tagline);
                    }else{
                        setHeadline(memory.title);
                }

                    return (
                        <div>
                        <Marker 
                        latitude={formattedCoords[0]} 
                        longitude={formattedCoords[1]}
                        >

                            if(tagline){}
                        ​       <h1 class='tagline'>{headline}</h1>
                            </Marker>


                        </div>
                )}
                ) */}


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

                   
			
           </ReactMapGl>
		</div>  
        
	)
	
}

