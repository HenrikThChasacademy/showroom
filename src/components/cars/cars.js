import React from 'react';
import Car from './car/car';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Cars(props) {

    return(
        <Container fluid>
            <Row xs={1} md={2} lg={3}>
            {props.carList.map((car, index) => {
                    return <Col key={car.brand+index}>
                        <Car 
                            key={car.brand+index}
                            car={car}
                            handleCarClick={props.handleCarClick}
                            />
                    </Col>
                })}
                <Col><Button onClick={props.handleAddNewCar}>+</Button></Col>
            </Row>
        </Container>
    )
}

export default Cars;