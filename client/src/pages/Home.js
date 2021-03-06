import React from "react";
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';


import { useQuery } from '@apollo/client';
import { QUERY_ROUTES } from '../utils/queries';
import GeoJSON from 'geojson';

const Home = () =>{

    const {loading, data}= useQuery(QUERY_ROUTES);
    const allRoutesData =  data?.routes || ['error'];
    let rawData
    if(!loading){
        rawData= GeoJSON.parse(allRoutesData, {'LineString': 'geometry'})
    }
    if(loading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    console.log(rawData)
    return(
        <main>
            <Header />

        {loading ? <Map data={''}/>
        : <Map data={rawData} />}
            
            <Footer />
        </main>
    )
}

export default Home;