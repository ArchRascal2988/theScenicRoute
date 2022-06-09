import React from "react";
import "./map.css"
import { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';


const Map= (props)=>{
    const def= props.data;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [geoData, setGeoData]= useState(def);



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
      
        map.current.addControl(new mapboxgl.GeolocateControl({trackUserLocation: false}),'top-right');
        map.current.addControl(geocoder, 'top-left');  
       
        
        map.current.on('load', () => {
            map.current.addSource('my-data', {
                'type': 'geojson',
                'data': def
            })  

            geocoder.setRenderFunction((item) =>{
                const maki = item.properties.maki || 'marker';
                return `<div class='geocoder-dropdown-item'>
                <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
                <span class='geocoder-dropdown-text'>
                ${item.text}
                </span>
                </div>`;
                },);

            map.current.addLayer({
                'id': 'my-data-layer',
                'type': 'line',
                'source': 'my-data',
                'paint': {
                    'line-width': 3.5,
                    'line-color': '#4C4C9D'
                },
                "minzoom": 7
            });

            map.current.on('click', 'my-data-layer', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                console.log(coordinates);
                //THIS IS WHERE THE POPUP IS BEING RENDERED. WE NEED TO HOOK INTO OUR DATA KEYS
                 
                new mapboxgl.Popup()
                .setLngLat(coordinates[0])
                .setHTML(`<h2>{route.title}</h2>
                          <h2>{route.difficulty}</h2>
                          <h2>{route.votes}</h2>  
                          <h3><a href="/route/62a26587be4ee9e47c3edf5e">see more</a></h3>`) 
                .addTo(map.current);
                });

                map.current.on('mouseenter', 'my-data-layer', () => {
                    map.current.getCanvas().style.cursor = 'pointer';
                    });
                     
                    // Change it back to a pointer when it leaves.
                map.current.on('mouseleave', 'my-data-layer', () => {
                    map.current.getCanvas().style.cursor = '';
                    });
        });
       
    }, [def]);
    
    
  return (
    <section className="mapBox">
        <div ref={mapContainer} className="map-container" />
    </section>
  )
    
}

export default Map;