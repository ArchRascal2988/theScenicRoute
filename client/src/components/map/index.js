import React from "react";


import { useRef, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ROUTES } from '../../utils/queries';


import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';


const Map= ()=>{
    const {loading, data}= useQuery(QUERY_ROUTES);
    const allRoutesData =  data?.routes || ['error'];
    let coordsData;
    if(!loading){
        coordsData= allRoutesData.map((route)=>{
            const rawGeo= {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: route.geometry
                    },
            };
            return JSON.stringify(rawGeo);
        })
    }
    
    console.log(coordsData);
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
                    'type': 'FeatureCollection',
                    'features': coordsData
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
                    'line-color': 'red'
                },
                "minzoom": 12
            });

            map.current.on('click', 'my-data-layer', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                //THIS IS WHERE THE POPUP IS BEING RENDERED. WE NEED TO HOOK INTO OUR DATA KEYS 
                
                 
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                 
                new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(`<h2>{route.title}</h2>
                          <h2>{route.difficulty}</h2>
                          <h2>{route.votes}</h2>  
                          <h3><a href="/route/:id">see more</a></h3>`) //<-----WE ARE NOT GOING TO HAVE A COMPONET FOR THIS. HTML FOR POPUP HERE. Right now it just links to route page
                //(IMPORTATNT: Whatever href we use for the link it needs the route id in the url like so-> /route/ab2343)
                //create an HTML outline for the popup in this file and link the single route 
                .addTo(map.current);
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