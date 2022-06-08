import React from "react";

const loggedIn= false;
//THIS IS GONNA CHANGE TO BE THE AUTH LoggedIn(). FOR TESTING

function Footer(props) {
    
    const logOut=()=>{
        console.log('heehheeheh');
    }

    if(props.none){
        return(
            <footer className="footer">
                <h1>The Scenic Route</h1>
            </footer>
        )
    }

    if(loggedIn){
        if(props.type==='dash'){
            return (
                <footer className="footer">
                    <section className="footBtnsContainer">
                        <a className="footBtn" onClick={logOut} href='/'>Logout</a>
                        <a className="footBtn" href='/'>Home</a>
                    </section>
                    <h1>The Scenic Route</h1>
                    <a href='/about'>About Us</a>
                </footer>
              );            
        }
        return (
            <footer className="footer">
                <section className="footBtnsContainer">
                    <a className="footBtn" onClick={logOut} href='/'>Logout</a>
                    <a className="footBtn" href='/dashboard'>Dashboard</a>
                </section>
                <h1>The Scenic Route</h1>
                <a href='/about'>About Us</a>
            </footer>
          );
    }else{
        return(<footer className="footer">
            <section className="footBtnsContainer">
                <a className="footBtn" href='/login'>Login</a>
                <a className="footBtn" href='/signup'>Signup</a>
            </section>
            <h1>The Scenic Route</h1>
            <a href='/about'>About Us</a>
        </footer>)
    }
}
    
  export default Footer;
   