import React from "react";
import CreateMap from "../components/createMap/index"
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import RouteForm from "../components/routeForm/index";

import { RouteProvider } from '../utils/RouteProvider';

const Create = () =>{

    return(
        <main>
            <Header />
            
            <RouteProvider>
                <CreateMap />
            
                <RouteForm />
            </RouteProvider>
        
            <Footer />
        </main>
    )
}

export default Create;