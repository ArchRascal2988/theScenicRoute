import React from "react";
import { useQuery } from '@apollo/client';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteList from '../components/routeList/index';
import { QUERY_ROUTES } from "../utils/queries";


const Home = () =>{
    const { data } = useQuery(QUERY_ROUTES);
    const routeTitles = data?.routes || []
    console.log(routeTitles);


    return(
        <main>
            <Header />

            <RouteList 
            routeTitles={routeTitles} 
            />

            <Map />

            <Footer />
        </main>
    )
}

export default Home;