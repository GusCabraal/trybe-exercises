// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0

    }
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    if (this.state.numeroDeCliques1 % 2 ===0){
    } 
  }
  handleButtonTwo = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  handleButtonThree = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }
    render() {
    return (
      <div>
            <button onClick={ this.handleButtonOne }>{this.state.numeroDeCliques1}</button>
            <button onClick={ this.handleButtonTwo }>{this.state.numeroDeCliques2}</button>
            <button onClick={ this.handleButtonThree }>{this.state.numeroDeCliques3}</button>
      </div>
    );
  }
}

export default App;
