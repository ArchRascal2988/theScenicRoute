import React from "react";
import auth from "../../utils/auth";
import "./footer.css"
function Footer(props) {
    
    const logOut=(event)=>{
        event.preventDefault()
        auth.logout();
    }

    if(props.none){
        return(
            <footer className="footer">
                <h1>The Scenic Route</h1>
            </footer>
        )
    }

    if(auth.loggedIn()){
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
            <div className="aboutUs">
            <a href='/about'>About Us</a>
            </div>
        </footer>)
    }
}
    
  export default Footer;
   