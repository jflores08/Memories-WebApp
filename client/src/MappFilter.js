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
 {/* {clickedFilterMenu ?(
     <div id="filtermenu">
         <h1>filter menu</h1>
         <button onClick={closeFilterMenu}>x</button>
         <input type="range"></input>
         <input type="range"></input>
         <input type="range"></input>
         
     </div> */}
 {/* ): null} */}