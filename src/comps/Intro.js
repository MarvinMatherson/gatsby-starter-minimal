import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Container, Row } from "react-bootstrap";
import image from "../images/webdev.png"


const Intro = () => {
return(
    <Container>
        <Row>
            <div class='col-lg-6'>
                <div class='experience'>
                    <h2>About me</h2>
                    <p>My name is Marvin and I'm a web and mobile development student at Suffolk University. I'm also a front end developer for Location works.  I started my coding journey in 2018 after teaching myself HTML and CSS.  I applied to university and was accepted onto a web and mobile development course, where I'm  learning many technologies like JavaScript and PHP. I’m currently teaching myself React. </p>
                    
                </div>
            </div>
            <div class='col-lg-6'>
                <div class='graphic'>
                   <img src = {image} width='80%' />
                </div>
            </div>

        </Row>
    </Container>
)

}
export default Intro;