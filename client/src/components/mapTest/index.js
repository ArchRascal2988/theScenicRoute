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
const[geoData, setGData] = useState({});


useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  
  })
  
  
    map.current.addControl(new mapboxgl.GeolocateControl({trackUserLocatoin: false}), 'top-right');

    const draw= new MapboxDraw({
        displayControlsDefault: true,
        controls:{
            point: true,
            line_string: true,
            polygon: false,
            trash: true
        }
    });
    map.current.addControl(draw);
    map.current.on('draw.create', (e)=>{
      console.log(e);
      draw.add(e.features[0].geometry);
      setGData(draw.getAll());
  })

});


const finiHandler= (e) =>{
  e.preventDefault();

  console.log(geoData);
};

  return (
    <div>
        <div ref={mapContainer} className="map-container" />
        <button onClick={finiHandler}>All finished?</button>
    </div>
    
  )
    
}

export default MapTest;