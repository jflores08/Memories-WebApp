import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from "react-map-gl"
​
import Datefilter from '../components/Datefilter'
​
​
function Map() {
   const [viewport, setViewport] = useState({
       latitude : 52.520008,
       longitude : 13.404954,
       width : "100vw",
       height : "100vh",
       zoom : 10
   })
​
    
    const [allMemories, setAllMemories] = useState([])
    const API_URL = 'http://localhost:5005';
​
    const getAllMemories = () => {
        axios.get(`${API_URL}/api/memories`)
             .then(res => {
                 setAllMemories(res.data)
                 console.log(allMemories)
             })
             .catch(err => console.log(err))
    }
    useEffect(() => {
        getAllMemories()
    }, [])
   
  
    
    return (
        <div>
         <Datefilter />
         <button onClick={openFilterMenu}>filter</button>
         <ReactMapGl
           {...viewport}
           mapboxApiAccessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"
           mapStyle = "mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv"
           onViewportChange = {viewport => {
               setViewport(viewport)
           }}
           >
             {allEvents.map((event) => {
                 return (
                    <Marker 
                    latitude={event.location.coordinates[0]} 
                    longitude={event.location.coordinates[1]}
                    >
​
                     <button 
                      onClick={(e) => {
                         e.preventDefault()
                         setClickedEvent(event)
                         setHoveredEvent(null)
                         
                     }}
                      onMouseEnter={(e) => {
                          if(clickedEvent === null){
                              setHoveredEvent(event)}
                          
                      }}
​
                      onMouseLeave={(e) => {
                          setHoveredEvent(null)
                          
                      }}
                     >
                         
                     </button>
                    </Marker>
                 )
             })}
              {clickedEvent ? (
                 <Popup 
                   latitude={clickedEvent.location.coordinates[0]} 
                   longitude={clickedEvent.location.coordinates[1]}
                   onClose={() => {
                       setClickedEvent(null)
                   }}
                   >
                     <div>
                         <h1>{clickedEvent.name}</h1>
                         <p>{clickedEvent.date.toString().slice(0, 10)}</p>
                     </div>
                 </Popup>
              ) : null}
              
              {hoveredEvent ? (
                  <Popup
                   latitude={hoveredEvent.location.coordinates[0]} 
                   longitude={hoveredEvent.location.coordinates[1]}
                  >
                   <div>
                       <h1>hover</h1>
                   </div>
​
                   </Popup>
              ) : null}
              {clickedFilterMenu ?(
                  <div id="filtermenu">
                      <h1>filter menu</h1>
                      <button onClick={closeFilterMenu}>x</button>
                      <input type="range"></input>
                      <input type="range"></input>
                      <input type="range"></input>
                      
                  </div>
              ): null}
           </ReactMapGl>
            
        </div>
    )
}
​
export default Map






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


  // const message = <p>hoy Mattie ⛵️🏴‍☠️</p>
    //      const latitudePop = 53.4815
	// 	 const longitudePop = 14.4226
	// const center = [-73.98393399979334,40.75533300052329]

	// Create map and lay over markers

        // const center = [13.4532321, 52.5331092]
	






                // console.log('userId from database is: ', response.data.User)
                
                const memoriez=res.data
               
                console.log ('Returned Memories', memoriez)
                // setAllMemories
                setAllMemories(memoriez)
                //log All Memories
                console.log ('All Memories', allMemories)
                    
                         memoriez.map(memory => {
            
                        const coords = memory.location[0];
                        const formattedCoords = JSON.parse(coords);
                        
                        if  (memory.tagline){
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
                        )
                    
                

            })
            .catch(err => console.log(err));
            console.log ('Memories', memories)
            
    }
  




    .catch(err => console.log(err))
   }
                // console.log('userId from database is: ', response.data.User)
                
                const memoriez=response.data
               
                console.log ('Returned Memories', memoriez)
                // setAllMemories
                setAllMemories(memoriez)
                //log All Memories
                console.log ('All Memories', allMemories)
                    
                         memoriez.map(memory => {
            
                        const coords = memory.location[0];
                        const formattedCoords = JSON.parse(coords);
                        
                        if  (memory.tagline){
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
                        )
                    