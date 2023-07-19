import React from 'react';
import GithubIcon from "@material-ui/icons/GitHub.js";
import EmailIcon from "@material-ui/icons/Email.js"; 
import LinkedInIcon from "@material-ui/icons/LinkedIn.js";
import "../styles/Footer.css"; 



function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
           <EmailIcon />
           <GithubIcon /> 
           <LinkedInIcon />
        </div>
        <p> &copy; 2023 Thank you for Visiting</p>
    </div>
  )
}

export default Footer