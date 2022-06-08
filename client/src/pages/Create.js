import React from "react";
import CreateMap from "../components/createMap/index"
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import RouteForm from "../components/routeForm/index"

const Create = () =>{

    return(
        <main>
            <Header />


            <CreateMap  />
            <section className="controls"> <p>Controls: Bar on top right to change edit mode. Click to add a point, double click to finalize a route, and click the button when all finished.</p></section>
            <RouteForm />
            
            <Footer />
        </main>
    )
}

export default Create;