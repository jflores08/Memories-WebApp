// import axios from "axios";
// import { useState, useEffect } from "react"
// import AddMemory from "../components/AddMemory";
// import MemoryCard from "../components/MemoryCard";
// import Map from '../Mapp'
// import { Marker } from 'react-map-gl';


// export default function MemoryMarkers(props) {


//     const api_URL = 'http://localhost:5005';

//     const [memories, setmemories] = useState([]);
//     const[filterMemories, setFilterMemories] = useState([]);
//     const [headline, setHeadline] = useState('')
//     let UserId = props.user._id

//     const[filtered, setFiltered] = useState([]);
//     const getAllMemories = () => {
//         axios.get(`/api/memories`)
//             .then(response => {
//                 console.log('response: ', response)
//                 const data=response.data
//                 console.log('data is: ', data)
//             //    const setfiltered(data.filter(
//             //         data.User === UserId
//             //     ))
//                 setFiltered(data)
//                 console.log(filtered)
//             })
//             .catch(err => console.log(err));

//     }


//          useEffect(() => {
//         getAllMemories();
//     }, [])

   

    


//             filtered.map(memory => {
            
//             const coords = memory.location[0];
//             const formattedCoords = JSON.parse(coords);
            
//             if  (memory.tagline){
//                     setHeadline(memory.tagline);
//                 }else{
//                     setHeadline(memory.title);
//             }

//                 return (
//                     <div>
//                         <Marker 
//                         latitude={formattedCoords[0]} 
//                         longitude={formattedCoords[1]}
//                         >
//                         ​       <h1 class='tagline'>{headline}</h1>
//                         </Marker>


//                     </div>
//             )}
//     )

// }
