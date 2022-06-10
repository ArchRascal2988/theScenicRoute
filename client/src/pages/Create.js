import React from "react";
import CreateMap from "../components/createMap/index"
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import RouteForm from "../components/routeForm/index"

const Create = () =>{

    return(
        <main>
            <Header />

            <CreateMap />
            
            <RouteForm />
            
            <Footer />
        </main>
    )
}

export default Create;