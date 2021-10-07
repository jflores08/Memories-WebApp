import React from 'react'
import Map from '../Mapp'
import './HomePage.css'
import { useState, useEffect } from 'react';







export default function HomePage(props) {

    const [currentZoom, setCurrentZoom] = useState('');

    // useEffect(() =>{
    //     setCurrentZoom = props.map.getZoom();
    // }, )

    

    // setCurrentZoom (this.map.getZoom())
    
    // console.log(currentZoom);

    return (
        <div>
            <h1> Imagine a Home Page 🦄 🌈</h1>
            {/* <div id='map' style={{width: '100vw', height: '100vh'}}></div> */}
                <div id='mapbox'>
                    {/* <Map onStyleLoad={ el => this.map = el }/> */}
                    <Map />
                </div>

        </div>
    )
}
