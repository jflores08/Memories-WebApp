
import './Map.css';
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ';


// Sample data 
const data = [
	{
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-73.9516030004786,40.72557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,40.75533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.9882730001973,40.718207001246554],
	}
]

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -74,
			lat: 40.7128,
			zoom: 12
		}
	}

	// Create map and lay over markers
	componentDidMount(){

        const center = [13.4532321, 52.5331092]
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb',
            center: center, // starting position [lng, lat]
            doubleClickZoom: true,
            zoom: 10, // starting zoom
            pitch: 30 
			
		})

		data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'50%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Mapp;