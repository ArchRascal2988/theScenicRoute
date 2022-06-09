
import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteInfo from '../components/routeInfo/index';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ROUTE } from '../utils/queries';

const SRoute= () =>{
    const {rId}= useParams();
//API CALL FOR SINGLE ROUTE USING ^^^^
const [findURoutes, { error, data }] = useQuery(QUERY_SINGLE_ROUTE);


    return(
        <main>
            <Header />
            
            <Map />
            
            <RouteInfo  />
    
            <Footer />
        </main>
    )
}

export default SRoute;