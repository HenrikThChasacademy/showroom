import React from 'react';
import Car from './car/car';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cars(props) {

    return(
        <div>
            <Container fluid>
                <Row xs={1} md={2} lg={3}>
                {props.carList.map((car, index) => {
                        return <Col>
                            <Car 
                                key={car.brand+index}
                                car={car}
                                handleCarClick={props.handleCarClick}
                                />
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Cars;