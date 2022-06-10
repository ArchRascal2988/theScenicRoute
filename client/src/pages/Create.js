import React from "react";
import CreateMap from "../components/createMap/index"
import Header from "../components/header/index";
import Footer from "../components/footer/index";


import { RouteProvider } from '../utils/RouteProvider';

const Create = () =>{

    return(
        <main>
            <Header />

            <RouteProvider>
                <CreateMap />
            </RouteProvider>
        
            <Footer />
        </main>
    )
}

export default Create;