import React from 'react';

const person = (props) => {
    return (
        <p onClick={props.click}>hi i am {props.name}, my age is {props.age}</p>
    );
};

export default person;
