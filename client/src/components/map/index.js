import React from "react";
import "./map.css"
import { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';


const Map= (props)=>{
    const def= props.data;
    console.log(def);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-81.42051971574105);
    const [lat, setLat] = useState(28.50968414217563);
    const [zoom, setZoom] = useState(6);
    const [geoData, setGeoData]= useState({});



    useEffect(() => {
        setGeoData(def);
        console.log(def, geoData);
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
            console.log(def, geoData);
            map.current.addSource('my-data', {
                'type': 'geojson',
                'data': def
            })  

            geocoder.setRenderFunction((item) =>{
                const maki = item.properties.maki || 'marker';
                return `<div class='geocoder-dropdown-item'>
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
                    'line-width': 3,
                    'line-color': '#4C4C9D'
                },
                "minzoom": 6
            });

            map.current.on('click', 'my-data-layer', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                console.log(coordinates);
                //THIS IS WHERE THE POPUP IS BEING RENDERED. WE NEED TO HOOK INTO OUR DATA KEYS
                 
                new mapboxgl.Popup()
                .setLngLat(coordinates[0])
                .setHTML(`<h2>${e.features[0].title}</h2>
                          <h2>${e.features[0].title}</h2>
                          <h3><a href="/route/62a282aa4f7afa820c4eca4d">see more</a></h3>`) 
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