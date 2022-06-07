import React from "react";


import { useRef, useEffect, useState } from 'react';


import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';


const Map= ()=>{
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
      

        map.current.addControl(new mapboxgl.GeolocateControl({trackUserLocation: false}),'top-right');
        map.current.addControl(geocoder, 'top-left');    
    
        map.current.on('load', () => {
            map.current.addSource('my-data', {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-122.4833858013153, 37.829607404976734],
                            [-122.4830961227417, 37.82932776098012],
                            [-122.4830746650696, 37.82932776098012],
                            [-122.48218417167662, 37.82889558180985],
                            [-122.48218417167662, 37.82890193740421],
                            [-122.48221099376678, 37.82868372835086],
                            [-122.4822163581848, 37.82868372835086],
                            [-122.48205006122589, 37.82801003030873]
                        ]
                    }, //CHANGE ABOVE OBJECT LATER TO BE DYNAMIC
                }
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
                    'line-width': 5,
                    // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
                    // to set the line-color to a feature property value.
                    'line-color': 'red'
                },
                "minzoom": 12
            });
        });

        

    });
    
    

    


  return (
    <section>
        <div ref={mapContainer} className="map-container" />
    </section>
  )
    
}

export default Map;