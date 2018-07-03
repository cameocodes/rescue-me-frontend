import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Pets extends Component {
  state = {
    pets: null
  }

  componentDidMount() {
    axios.get('http://localhost:3000/pets')
    .then(pets => {
        this.setState({
            pets: pets.data
        })
    })
    .catch(err => {
        console.error(err)
    })
}


  render() {
    const {pets} = this.state
        if(!pets) return <h3>Fetching pets...</h3>

        return pets.map(pet => {
          return <p key={pet._id}>
          {pet.breed} {pet.species}<br/>
          <Link 
          key={pet._id} 
          to={{
            pathname: `/pets/${pet._id}`,
            state: { pet }
          }}>
            <button>View Pet</button>
          </Link></p>
        })
  }
}

export default Pets;