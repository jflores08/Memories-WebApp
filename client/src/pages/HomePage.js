import React from 'react'
import Map from '../Mapp'
import './HomePage.css'
import { useState, useEffect } from 'react';
import Book from './storyHomePage.jpeg';





export default function HomePage(props) {

    const [currentZoom, setCurrentZoom] = useState('');

    // useEffect(() =>{
    //     setCurrentZoom = props.map.getZoom();
    // }, )

    

    // setCurrentZoom (this.map.getZoom())
    
    // console.log(currentZoom);

    return (
        
        <div id='HomePage'>
            <h1 id='greeting'> Explore to find the Footprints left behind by others</h1><br></br>
            <br></br><br></br>
            <h2 id='logInRequest'>Log In to leave your own</h2>
            {/* <div id='map' style={{width: '100vw', height: '100vh'}}></div> */}
                <div id='mapbox'>
                    {/* <Map onStyleLoad={ el => this.map = el }/> */}
                    <Map />
                </div>

        </div>
        
    )
}
