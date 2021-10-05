import React from 'react'
import Mapp from '../Map'


export default function HomePage() {
    return (
        <div>
            <h1> Imagine a Home Page 🦄 🌈</h1>
            <div id='map' style={{width: '100vw', height: '100vh'}}></div>
                <div>
                    <Mapp />
                </div>

        </div>
    )
}
