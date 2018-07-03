import React from 'react';
import { Link } from 'react-router-dom';


const Pet = (props) => {
    const pet = props.location.state.pet
    return (
        <div className="singlePet">
            <h1>{ pet.breed} { pet.species}</h1>
            <p></p>
            <Link to={'/pets'}> Back </Link>
        </div>
    )
    
    
}

 
export default Pet