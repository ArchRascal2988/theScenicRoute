
import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteInfo from '../components/routeInfo/index';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ROUTE } from '../utils/queries';

const SRoute= () =>{
    const {routeId}= useParams();
    console.log(routeId);
    let routeData;
    const {loading, data}= useQuery(QUERY_SINGLE_ROUTE,{
        variables:{
            "singleRouteId": routeId
        }})
    if(!loading){
        routeData= data;
    }


    return(
        <main>
            <Header />
            <div className="singleRoute">
            <Map />
            
            <RouteInfo data={routeData} />
            </div>
            <Footer />
        </main>
    )
}

export default SRoute;