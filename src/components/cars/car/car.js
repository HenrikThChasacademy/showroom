import React from 'react';
import './car.scss';

function Car(props) {
    const imagePath = "./images/"+props.car.imagePath;

    return(
        <div className="car-container" onClick={() => props.handleCarClick(props.car.id)}> 
            <div>
                <h2>{props.car.brand}</h2>
                <p>{props.car.model}</p>
                <p>{props.car.year}</p>
            </div>
            <div>
                <img className="car-image" src={imagePath} alt={props.car.brand}/>
            </div>
        </div>
    )
}

export default Car;