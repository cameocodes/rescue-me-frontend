import React from 'react';
import { Link } from 'react-router-dom';


const Pet = (props) => {
    const pet = props.location.state.pet
    return (
        <div className="singlePet">
            <Link to={'/pets'}> Back </Link>
            <h1>{ pet.breed} { pet.species}</h1>
            <p></p>
            
        </div>
    )
    
    
}

 
export default Pet