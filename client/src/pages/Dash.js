import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteList from '../components/routeList/index';

const Dash = () =>{
    const dbData=[];
    return(
        <main>
            <Header />

            <RouteList routes={dbData} />

            <Map />

            <Footer />
        </main>
    )
    
}

export default Dash;