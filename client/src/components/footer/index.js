import React from "react";

const loggedIn= true;
//THIS IS GONNA CHANGE TO BE THE AUTH LoggedIn(). FOR TESTING
let btns;
loggedIn? btns = (
    <section className="footBtnsContainer">
        <a className="footBtn" href='/login'>Logout</a>
        <a className="footBtn" href='/dash'>Dashboard</a>
    </section>
        
    )
    :btns=(
    <section className="footBtnsContainer">
        <a className="footBtn" href='/login'>Login</a>
        <a className="footBtn" href='/Singup'>Signup</a>
    </section>
    );


function Footer(props) {
    if(props.none){
        return(
            <footer className="footer">
                <h1>The Scenic Route</h1>
            </footer>
        )
    }
  return (
    <footer className="footer">
        {btns}
        <h1>The Scenic Route</h1>
        <a href='/about'>About Us</a>
    </footer>
  );
}
    
  export default Footer;
   