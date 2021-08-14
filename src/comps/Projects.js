import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Container, Row, Card, Button, Img} from "react-bootstrap";
import metworks from "../images/Metworks.png";
import phones from "../images/Phones.png";
import thisite from "../images/thiswebsite.png";

const Projects = () => {
    return(
        <div class='background'>
          
        <Container>
            <h2>My Projects</h2>
            <Row>
               <div class='col-lg-4'>
                <Card style={{ width: '100%'}}>
                <Card.Img variant="top" src={phones}  />
                <Card.Body>
                    <Card.Title>Phones Galore</Card.Title>
                        <Card.Text>
                            This was my first ever web application. It uses PHP as a server side language.
                        </Card.Text>
                        <Button variant="outline-dark" href='https://phones.marvinmatherson.uosweb.co.uk/' target="_BLANK">Visit PhonesGalore</Button>
                </Card.Body>
                </Card>
                </div>
                <div class='col-lg-4'>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={metworks} />
                <Card.Body>
                    <Card.Title> Metworks London</Card.Title>
                        <Card.Text>
                            This was my first website made for another company.
                        </Card.Text>
                        <Button variant="outline-dark" href='https://www.metworkslondon.com/new' target='_BLANK'>Visit Metworks</Button>
                </Card.Body>
                </Card>
               </div>
               <div class='col-lg-4'>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={thisite} />
                <Card.Body>
                    <Card.Title> This website</Card.Title>
                        <Card.Text>
                            I just need something to go here if I'll be honest with you.
                        </Card.Text>
                        <Button variant="outline-dark" href='https://www.metworkslondon.com/new' target='_BLANK'>Visit this website</Button>
                </Card.Body>
                </Card>
               </div>
            </Row>
         
        </Container>
        </div>
    )
}
export default Projects;