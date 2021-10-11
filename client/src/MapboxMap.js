import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl, { Marker, Popup } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './MapboxMap.css';
import MarkerCard from './components/MarkerCard';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-router-dom';
import  ReactMapGl  from 'react-map-gl';


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ';
 

export default function Map() {
    
    //Set up map variables
    const mapContainer = useRef(null);
    
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
    //Set up map
    useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb',
    center: [lng, lat],
    zoom: zoom

    });


    const marker1 = new mapboxgl.Popup()
    .setLngLat([42.35, -70.9])
    .addTo(map.current);

        <Marker
            latitude= {42.748817}
            longitude={-70.985428}
        >
            <h1 class='tagline'>Hello ⛵️🏴‍☠️</h1>
        </Marker>
    });
    

  


    //Set user states of map variables
    useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    
   
    });
    });


    //Create Map markers


            // Set up states for placing Markers on map 
        const [memories, setMemories] = useState([]);
        const [allMemories, setAllMemories] = useState([])
        const [headline, setHeadline] = useState('')

        // Get the Memory files from the server
        const getAllMemories = () => {
            axios.get(`/api/memories`)
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

        console.log('Memories are: ', memories)


        // //create markers
        //     for (let i = 0; i < memories.length; i++){
        //         return (
        //             <Marker 
        //             latitude={memories[i].location[0]} 
        //             longitude={memories[i].location[1]}
        //             >
                    
        //             <p> <Link to={`/memories/${memories[i]._id}`}>
        //                 {memories[i].title}
        //             </Link></p>

        //             </Marker>
        //         )
        //     }
        



        function addMarker(center, id, ) {
            
            new mapboxgl.Marker({
              color: "red",
            });
            new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false,
              closeOnMove: false,
              maxWidth: "auto"
            }) 
              
              .setLngLat(center)
              .addTo(map.current);
          }
            
    
        return (
            <div>
                <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="map-container" 
                />

                

                {/* {memories.map((memory) => {
                            
                
                            
                            return (
                               <Marker 
                               latitude={memory.latitude} 
                               longitude={memory.longitude}
                               >
                               
                               <p> <Link to={`/memories/${memory._id}`}>
                                     {memory.title}
                                </Link></p>

                               </Marker>
                            )
                        })} */}







                {/* {memories.map((memory) => {
                    return (
                            <Marker 
                                latitude={memory.latitude} 
                                longitude={memory.longitude}
                                >
                                
                                <Link to={`/memories/${memory._id}`}>
                                    <p>{memory.title}</p>
                                </Link>
                
                            </Marker>
                    )
                })}  */}

                {/* for (let i = 0; i < memories.length; i++){
                    
                        <Marker 
                        latitude={memories.latitude} 
                        longitude={memories.longitude}
                        >
                        
                        <p> <Link to={`/memories/${memories[i]._id}`}>
                            {memories[i].title}
                        </Link></p>

                        </Marker>
                    
                } */}
            
                {/* {memories.map(memory => <MarkerCard key={memory._id} {...memory} />)} */}
            </div>

        );
}