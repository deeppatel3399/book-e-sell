import React from "react";
import logo from '../images/site-logo.svg';

const Footer = () =>{
    return(
        <>
        <footer>
        <div>
        <center>
        <img className="copyrightlogo" src={logo} alt="logo"/>
        <p className="copyrighttext">© 2015 Tatvasoft.com. All right reserved.</p>
        </center>
        </div>
        </footer>
        </>
    );
}

export default Footer;