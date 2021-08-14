import * as React from "react";
import { Container, Row } from "react-bootstrap";


const Languages = () => {
    return(
        <Container>
            <Row>
                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>HTML</h2>
                    </div>
                </div>
               
                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>CSS</h2>
                    </div>
                </div>

                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>JavaScript</h2>
                    </div>
                </div>

                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>PHP</h2>
                    </div>
                </div>

                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>Sass</h2>
                    </div>
                </div>

                <div class = 'col-lg-2'>
                    <div class='lang'>
                        <h2>React Native</h2>
                    </div>
                </div>

            </Row>

        </Container>
    )
}
export default Languages;