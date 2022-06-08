import React from "react";

import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Login from '../components/login/index';
import Signup from '../components/signup/index';

const LogSign = (props) =>{
    if(props.type==='login'){
        return(
            <main>
                <Header />
                <Login />
                <Footer none={true} />
            </main>
            
        )
    } else{
        return(
            <main>
                <Header />
                <Signup />
                <Footer none={true} />
            </main>
        )
    }
}

export default LogSign;