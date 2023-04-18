import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Container, Row, Card, Button, Img} from "react-bootstrap";
import metworks from "../images/Metworks.png";
import phones from "../images/Phones.png";
import thisite from "../images/thiswebsite.png";
import jerkshack from '../images/jerkshack.png';
import backontrack from '../images/backontrack.png';

const Projects = () => {
    return(
  
        <div class='background' data-bs-spy="scroll" data-bs-target="#navbar-example1" id="scrollspyHeading1">

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
                        <Button variant="outline-dark" href='https://www.metworkslondon.com/' target='framename'>Visit Metworks</Button>
                </Card.Body>
                </Card>
               </div>
               <div class='col-lg-4'>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={jerkshack} />
                <Card.Body>
                    <Card.Title>Jerkshack</Card.Title>
                        <Card.Text>
                            A group project at University for a restaurant, which is being used as their main site.
                        </Card.Text>
                        <Button variant="outline-dark" href='http://jerk-shack.com' target='framename'>Visit the Jerk Shack</Button>
                </Card.Body>
                </Card>
                </div>
            <div class='col-lg-4'>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={backontrack} />
                <Card.Body>
                    <Card.Title>Back On Track</Card.Title>
                        <Card.Text>
                            My dissertation, a website to assist homeless individuals.
                        </Card.Text>
                        <Button variant="outline-dark" href='https://backontrack.marvinmatherson.uosweb.co.uk/' target='framename'>Visit Back on Track</Button>
                </Card.Body>
                </Card>
                </div>
                <div class='col-lg-4'>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={thisite} />
                <Card.Body>
                    <Card.Title> Business Expo</Card.Title>
                        <Card.Text>
                            The Suffolk Business Expo
                        </Card.Text>
                        <Button variant="outline-dark" href='https://suffolkbusinessexpo.co.uk/' target='_BLANK'>Visit this website</Button>
                </Card.Body>
                </Card>
               </div>
                </Row>
        </Container>
        
        </div>
    )
}
export default Projects;
