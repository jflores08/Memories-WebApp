// import accessToken from '..../.env'

// export default function mapbox(){
//     return(
//     mapboxgl.accessToken = accessToken;

//     const center = [13.4532321, 52.5331092]

//     <div>
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/jon61/cku5hizxv2ll918tiz3zbkvhb', // style URL
//         center: center, // starting position [lng, lat]
//         doubleClickZoom: true,
//         zoom: 10, // starting zoom
//         pitch: 30
//     });
//     let currentZoom = map.getZoom()
//     console.log (currentZoom)
//     const nav = new mapboxgl.NavigationControl();
//     map.addControl(nav, 'top-left');

//     const popup = new mapboxgl.Popup({
//         closeButton: true
//     });
//     {(currentZoom > 9)&&(
//         popup.setLngLat(center)
//             .setHTML('<h1>Ahoy Mattie ⛵️🏴‍☠️</h1>')
//             .setMaxWidth('100px')
//             .addTo(map)
//         )
//     }
//     </div>
//     )
// }