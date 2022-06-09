import React from "react";
import { useQuery } from '@apollo/client';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';
import RouteList from '../components/routeList/index';
import { QUERY_ME, QUERY_ROUTES, QUERY_USER } from "../utils/queries";


const Dash = () => {

    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.me || {};
    // navigate to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //   return <Navigate to="/me" />;
    // }
    console.log(user)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }
    console.log(user);

    return (
        <main>

            <Header />
            <h1>Welcome </h1>
            <Map />
            <ui>
                <li>Route 1</li>
                <li>Route 2</li>
                <li>Route 3</li>
                <li>Route 4</li>
            </ui>
            <Footer />
        </main>
    )
}


export default Dash;