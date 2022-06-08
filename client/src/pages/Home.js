import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';

const Home = () =>{
    return(
        <main>
            <Header />
            
            <Map type='' />
            
            <Footer />
        </main>
    )
}

export default Home;