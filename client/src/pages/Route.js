
import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import Route from '../components/route/index';

import { useParams } from 'react-router-dom';

const {rId}= useParams();
//API CALL FOR SINGLE ROUTE USING ^^^^




const Route= () =>{
    return(
        <main>
            <Header />
            
            <Map />
            
            <Route  />
    
            <Footer />
        </main>
    )
}

export default Route;