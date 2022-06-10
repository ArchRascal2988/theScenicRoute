
import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteInfo from '../components/routeInfo/index';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ROUTE } from "../utils/queries";

const SRoute= () =>{
    const routeId= useParams();
    console.log(routeId);
    let routeData;
    const {loading, data}= useQuery(QUERY_SINGLE_ROUTE,{
        variables:{
            "singleRouteId": "62a282aa4f7afa820c4eca4d"
        }})

    if(!loading){
        routeData= data.singleRoute;
        console.log(routeData);
    }


    return(
        <main>
            <Header />
            <div className="singleRoute">
            <Map />

            {!loading ? <RouteInfo info={routeData} />
            :<RouteInfo info='' />
            }
            
            </div>

            <Footer />
        </main>
    )
}

export default SRoute;