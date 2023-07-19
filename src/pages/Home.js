import { Email, GitHub } from '@material-ui/icons'
import React from 'react'
import GithubIcon from "@material-ui/icons/GitHub.js";
import EmailIcon from "@material-ui/icons/Email.js";
import LinkedInIcon from "@material-ui/icons/LinkedIn.js";

import "../styles/Home.css";
import homeImage from '../assets/images/homeimage.jpg'



function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <div className='homeimage'>
        <img src={homeImage} alt='plant in pot' className='image'/>

          <div>
          <div className='content'>
            <div className='prompt'>
              <h2>MY NAME IS,
                MARISSAEDITH.
              </h2>
              <p>My specialty is front-end web design and development, creating captivating websites using front and back-end.</p>
              <GithubIcon />
              <EmailIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='items'>
            <h2> Front-End</h2>
            <span> ReactJS, HTML, CSS, GIT, BootStrap, StyledComponents</span>
          </li>
          <li className='items'>
            <h2> Back-End</h2>
            <span> ExpressJS, GraphQL, MySQL, MongoDB </span>
          </li>
          <li className='items'>
            <h2> Languages</h2>
            <span> Javascript</span>
          </li>
        </ol>
      </div>
      </div> 
    </div>
  );
}

export default Home;