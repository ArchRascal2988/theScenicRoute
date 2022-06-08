import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Map from '../components/map/index';

const Home = () =>{
    return(
        <main>
            <Header />
            
            <Map />
            
            <Footer />
        </main>
    )
}

// import { QUERY_ROUTES } from '../utils/queries'
// import { useQuery } from '@apollo/client';


// const Home = () =>{
//     const { data }= useQuery(QUERY_ROUTES)
//     console.log(data)
//     return(
//         <main>
//             <Header />
            
//            data
            
//             <Footer />
//         </main>
//     )
// }

export default Home;