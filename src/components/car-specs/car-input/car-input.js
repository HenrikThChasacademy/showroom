import React from 'react';

function CarInput(props) {
    const { value, handleEditCarValue } = props;

    return (
        <input type="text" value={value} 
        onChange={(e) => handleEditCarValue(e.target.value)} /> 
    )
}

export default CarInput;