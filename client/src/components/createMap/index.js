import React from "react";

import { useRouteContext } from "../../utils/RouteProvider";

import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsM3lqaXlkaTA3cXkzaGxzaHRhbGJzaGkifQ.7FyvUEOWv9_GOlh0iSATfA';


const CreateMap= ()=>{
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [geoData, setGData]= useState({});

    
    const [difficulty, setDiff] = useState("");
    const difficultyLevel = ["easy", "moderate", "hard", "madman"]
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    // const [notes, setNotes] = useState("");
     

    const {addGeometry, currentRoute} = useRouteContext();
    const[coords, setCoords] = useState([[],[]]);


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

const handleSubmit = async (e) => {
        e.preventDefault();
        const rawData = {
        "userId": "62a0de824611b77c9f324997",
        // geometry: geoData.features[0].geometry.coordinates,
        "geometry":[[111.12341,222.1234],
    [123.234,123.44]],
        "description": "description",
        "title": "god",
        "difficultyLevel": 1,
        "tags": "help",
        }
        console.log(rawData)
        try{
        setTitle('');
        setDiff('');
        setDescription('');
        setTags('');
    }catch(err){
        console.error(err)
    }
}

const finiHandler= (e) =>{
  e.preventDefault();
  
  let routePoints = geoData.features[0].geometry.coordinates.map((e)=>{
      <option key={e}>{e}</option>
  })
  console.log(routePoints);
};
    
  return (
    <div>
        <div ref={mapContainer} className="map-container createMap" />
        <button onClick={finiHandler}>All finished?</button>
        <input
                type="text"
                placeholder="Title of Route"
                value={title}
                name="text"
                className="route-title"
                onChange={(event) => setTitle(event.target.value)}
            ></input>
            <form className="route-form" onSubmit={handleSubmit}>
                <div className="dropdown">
                    <button className={`dropbtn ${difficulty}`}></button>
                    <div className="dropdown-content">
                        <p onClick={() => setDiff(difficultyLevel[0])}>Easy</p>
                        <p onClick={() => setDiff(difficultyLevel[1])}>Moderate</p>
                        <p onClick={() => setDiff(difficultyLevel[2])}>Hard</p>
                        <p onClick={() => setDiff(difficultyLevel[3])}>Madman</p>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Insert Description of Route"
                    value={description}
                    name="text"
                    className="route-description"
                    onChange={(event) => setDescription(event.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="insert tags separated by a ,"
                    value={tags}
                    name="text"
                    className="route-tags"
                    onChange={(event) => setTags(event.target.value)}
                ></input>
                  {/* Set this notes part of the form to an event listener: double click to display this part of the form */}
                    {/* <div className="dropdown">
                    <button className={`dropbtn ${points}`}></button>
                    <div className="dropdown-content">
                        <p onClick={() => setDiff(difficultyLevel[0])}>Easy</p>
                        <p onClick={() => setDiff(difficultyLevel[1])}>Moderate</p>
                        <p onClick={() => setDiff(difficultyLevel[2])}>Hard</p>
                        <p onClick={() => setDiff(difficultyLevel[3])}>Madman</p>
                    </div>
                    </div> */}
                     <div className="col-2 text-left">
                </div>
                <button className="bucket-button">Create Route</button>
            </form>


        </div>

  )
    
}

export default CreateMap;