import React from "react";


import { useRef, useEffect, useState } from 'react';

//This will stay most likely
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw'

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';

const CreateMap= ()=>{
    //map state init
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);
const[geoData, setGData] = useState({});


useEffect(() => {
  const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
    
        const geocoder= new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: map.current,
            fuzzyMatch: true,
            autocomplete: false,
            proximity:{
                "latitude": lat,
                "longitude": lng
            }
        });

          

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
      
        map.current.addControl(new mapboxgl.GeolocateControl({trackUserLocation: false}),'top-right');
        map.current.addControl(geocoder, 'top-left');    

        map.current.on('load', () => {
            geocoder.setRenderFunction((item) =>{
                const maki = item.properties.maki || 'marker';
                return `<div class='geocoder-dropdown-item'>
                <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
                <span class='geocoder-dropdown-text'>
                ${item.text}
                </span>
                </div>`;
                },);
        });
        

    });
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

export default CreateMap;