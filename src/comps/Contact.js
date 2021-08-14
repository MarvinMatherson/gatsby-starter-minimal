import * as React from "react";
import { Container, Row, Form} from "react-bootstrap";


const Contact = () => {
    return(
        <div class='contacta'>
          
        <Container>
        <h3>Contact Me!</h3>
            <Row>   
                <Form>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Row>
        </Container>
        </div>
    )

}

export default Contact;