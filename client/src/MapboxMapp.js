import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

export default function Map() {

    mapboxgl.accessToken =
'pk.eyJ1Ijoiam9uNjEiLCJhIjoiY2t1ZTZ1Zzc1MWVicjJvbXhpeTF4b2h2bSJ9.U2K0n8U4u5QVCJ0GXI6QHQ';


const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocoder = mbxGeocoding({ accessToken: mapboxgl.accessToken });

  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });
  return (
    <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
      <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
    </ReactMapGL>
  );
}