
import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteInfo from '../components/routeInfo/index';

import { useParams } from 'react-router-dom';

const SRoute= () =>{
    const {rId}= useParams();
//API CALL FOR SINGLE ROUTE USING ^^^^


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