import React from "react";

import Login from '../components/login/index';
import Signup from '../components/signup/index';

const LogSign = (props) =>{
    if(props.type==='login'){
        return(
            <main>
                <Login />
            </main>
        )
    } else{
        return(
            <main>
                <Signup />
            </main>
        )
    }
}

export default LogSign;