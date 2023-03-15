import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faSpotify, faFacebook} from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';
 
const Footer = (props) => {
    return (
        <footer className={classes.footerBanner}>
            <div className={classes.footerHeading}>The Generics</div>
            <div className={`fa-2xl ${classes.icons}`}>
            <FontAwesomeIcon  icon={faYoutube} />
            <FontAwesomeIcon  icon={faSpotify} />
            <FontAwesomeIcon  icon={faFacebook} />
            </div>
         
        </footer>
    )
};

export default Footer;