import React from 'react';
import './car-specs.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function CarSpecs(props) {
    const imagePath = "./images/"+props.car.image;
    return (
        <div className="car-specs-container"> 
            <Container fluid>
                <Row>
                    <Button variant="primary" onClick={props.handleBack}>Back</Button>
                    <Col>
                        <h2>{props.car.brand}</h2>
                        <p>Model: {props.car.model}</p>
                        <p>Manufactured: {props.car.year}</p>
                        <p>Engine: {props.car.engine}</p>
                        <p>Power: {props.car.effect}</p>
                    </Col>
                    <Col>
                        <img className="car-spec-image" src={imagePath} alt={props.car.brand}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CarSpecs;