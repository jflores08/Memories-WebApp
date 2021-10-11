import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './MapboxMap.css'
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ';
 
export default function Map() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb',
center: [lng, lat],
zoom: zoom
});
});
 
useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});


// Set up states for placing Markers on map 
	
const [memories, setMemories] = useState([]);
const [allMemories, setAllMemories] = useState([])
const [headline, setHeadline] = useState('')



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

 
return (
<div>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div>
);
}