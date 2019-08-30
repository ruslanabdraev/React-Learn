import React from 'react';
import Pokedex from './Pokedex.js';

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
        this.setState({list: response.results})
      });
  }

  render() {
    return <Pokedex list={this.state.list} />;
  }

}

export default Wrapper;