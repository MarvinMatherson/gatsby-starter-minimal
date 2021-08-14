import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";


const Hero = () => {
  return (
    <div>
        <div class='photo'>
            <StaticImage src = '../images/circle-cropped.png' class='imag' height = {300} />
            <h1>Hello, I'm Marvin.</h1>
            <h3>I'm an aspiring web developer <br></br> currently in university.</h3>
            <div class='button'>See my projects</div>
        </div>
    </div>
  )
}

export default Hero;
