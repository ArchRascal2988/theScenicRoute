import React from "react";


import { useRef, useEffect, useState } from 'react';

//This will stay most likely
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw'

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';

const MapTest= ()=>{
    //map state init
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);


useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  
  })
  
  
    map.current.addControl(new mapboxgl.GeolocateControl({trackUserLocatoin: false}), 'top-right').addControl(new mapboxgl.AttributionControl());

    const draw= new MapboxDraw({
        displayControlsDefault: false,
        controls:{
            point: true,
            trash: true
        },
        defaultMode: 'draw_point'
    });
    map.current.addControl(draw);
  });
//end of nonsense



  return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )
    
}

export default MapTest;