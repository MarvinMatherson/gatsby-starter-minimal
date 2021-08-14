import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import marv from '../images/circle-cropped.png'


const Hero = () => {
  return (
    <div>
        <div class='photo'>
            <img src = {marv}  class='imag' height = {300} />
            <h1>Hello, I'm Marvin.</h1>
            <h3>I'm an aspiring web developer <br></br> currently in university.</h3>
           <a href="#scrollspyHeading1"> <div class='button'>See my projects</div> </a>
        </div>
    </div>
  )
}

export default Hero;
