import React from "react";
import { useQuery } from '@apollo/client';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteList from '../components/routeList/index';
import { QUERY_ME, QUERY_ROUTES, QUERY_USER } from "../utils/queries";

const Dash = () => {
    const { loading, data } = useQuery(QUERY_ROUTES);
    const honeymoonRoutes = data?.routes || ['error']
    console.log(honeymoonRoutes);

    return (
        <main>
            <h1>Hello World</h1>
            <Header />
            <Map />
                
            <div name='route'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <RouteList
                    routes={honeymoonRoutes}
                  />
                )}
            </div>



            <Footer type='dash'/>
        </main>
    )

}

export default Dash;