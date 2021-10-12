import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGl, {GeolocateControl, NavigationControl, Marker, Popup} from "react-map-gl"
import {Link} from 'react-router-dom'
import './AllMemoriesMap.css'

function Map() {
    
    const navControlStyle= {
        right: 10,
        top: 10
      };
    
    const geolocateControlStyle= {
        right: 10,
        top: 100
      };


       // const map variables
    const [hoveredEvent, setHoveredEvent] = useState(null)
    const [lat, setLat] = useState(40.748817);
    const [lng, setLng] = useState(-73.985428);
    const [zoom, setZoom] = useState(9);
   const [viewport, setViewport] = useState({
       latitude : lat,
       longitude : lng,
       width : "85vw",
       height : "100vh",
       zoom : 10
   })
   

   //Create Map markers


            // Set up states for placing Markers on map 
            const [memories, setMemories] = useState([]);
            const [allMemories, setAllMemories] = useState([])
            const [headline, setHeadline] = useState('')
    
            // Get the Public Memory files from the server
            const getAllMemories = () => {
                axios.get(`/api/memories/public`)
                    .then(response => {
                        console.log('Get marker data: ', response)
                        setMemories(response.data)
                        
                        console.log ('title: ', JSON.parse(response.data[3].location))
                        
                        
                    })
                
                    .catch(err => console.log(err));
    
            }
    
            useEffect(() => {
                getAllMemories();
            }, [])
    
            
    
    
  
   

    return (
        <div>
         
         <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
         <ReactMapGl
           {...viewport}
           mapboxApiAccessToken = "pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ"
           mapStyle = "mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb"
           trackUserLocation = {true}
           onViewportChange = {viewport => {
               setViewport(viewport)
                // setLng(viewport.getCenter().lng.toFixed(4));
                //  setLat(viewport.getCenter().lat.toFixed(4));
                //  setZoom(viewport.getZoom().toFixed(2));
           }}
           >
                <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        label={'Find Me'}
      />
      <NavigationControl style={navControlStyle} />
             
                
             <Marker
            latitude= {42.748817}
            longitude={-73.985428}
        >
            <h1 class='tagline'>Hello ⛵️🏴‍☠️</h1>
        </Marker>




        {memories.map((memory) => {
                            
                
                            
                            return (
                               <Marker 
                               latitude={memory.latitude} 
                               longitude={memory.longitude}
                               >
                               
                               <p class='tagline'> <Link to={`/memories/${memory._id}`  }>
                                     {memory.title}
                                </Link></p>

                               </Marker>
                            )
                        })}
              




              {hoveredEvent ? (
                   <Popup
                   latitude={40.748817} 
                   longitude={-73.985428}

                  >
                   <div>
                       <h1>Hello ⛵️🏴‍☠️</h1>
                   </div>
​
                   </Popup>
               ) : null} 
           </ReactMapGl>
            
        </div>
    )
}

export default Map