import React from "react";
import { useQuery } from '@apollo/client';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteList from '../components/routeList/index';
import { QUERY_ROUTES, QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';


const Dash = () => {
    const userData= Auth.getUser();

    const {data, loading}=useQuery(QUERY_USER,{
        variables:{
          "userId": userData.data._id
        }});

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>

            <Header />
            <h1>Welcome {user.username}</h1>
            <Map />
            <section>
                <a href='/create'>Create A Route +</a>
            <ul>
                <li>Route 1</li>
                <li>Route 2</li>
                <li>Route 3</li>
                <li>Route 4</li>
            </ul>
            </section>
            
            <Footer />
        </main>
    )
}


export default Dash;