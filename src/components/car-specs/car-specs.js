import React from 'react';
import './car-specs.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CarInput from './car-input/car-input';

function CarSpecs(props) {
    const imagePath = "./images/"+props.car.imagePath;
    return (
        <div className="car-specs-container"> 
            <Container fluid>
                <Row>
                    <Button variant="primary" onClick={props.handleBack}>Back</Button>
                    <Col>
                        <h2>{props.isEdit? 
                            <CarInput 
                                handleEditCarValue={(brand) => 
                                    props.handleEditCarValue({...props.car, brand: brand})}
                                value={props.car.brand}/> 
                                : props.car.brand }
                        </h2>
                        <p>Model: {props.isEdit? 
                            <CarInput 
                                handleEditCarValue={(model) => 
                                    props.handleEditCarValue({...props.car, model: model})}
                                value={props.car.model} /> 
                                : props.car.model}
                        </p>
                        <p>Manufactured: {props.isEdit? 
                            <CarInput 
                                handleEditCarValue={(year) => 
                                    props.handleEditCarValue({...props.car, year: year})}
                                value={props.car.year} /> 
                                : props.car.year}
                        </p>
                        <p>Engine: {props.isEdit? 
                            <CarInput 
                                handleEditCarValue={(engine) => 
                                    props.handleEditCarValue({...props.car, engine: engine})}
                                value={props.car.engine} /> 
                                : props.car.engine}
                        </p>
                        <p>Power: {props.isEdit? 
                            <CarInput 
                                handleEditCarValue={(effect) => 
                                    props.handleEditCarValue({...props.car, effect: effect})}
                                value={props.car.effect} /> 
                                : props.car.effect}
                        </p>
                        {props.isEdit?
                            <p>Image path: 
                            <CarInput
                                handleEditCarValue={(imagePath) => 
                                    props.handleEditCarValue({...props.car, imagePath: imagePath})}
                                value={props.car.imagePath} /> 
                                : {props.car.imagePath}
                            </p> : <p></p>
                        }
                    </Col>
                    <Col>
                        <img className="car-spec-image" src={imagePath} alt={props.car.brand}/>
                    </Col>
                    <Col>
                        <Row>
                            {props.isEdit?
                            <Col>
                                <Button variant="primary" onClick={() => props.handleSaveCar(props.car)}>Save</Button>    
                                <Button variant="primary" onClick={props.handleEditCar}>Cancel</Button>
                            </Col>
                            : <Button variant="secondary" onClick={props.handleEditCar}>Edit</Button>
                        }
                        </Row>
                        <Row>
                            <Button variant="secondary" onClick={() => props.handleRemoveCar(props.car.id)}>Remove</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CarSpecs;