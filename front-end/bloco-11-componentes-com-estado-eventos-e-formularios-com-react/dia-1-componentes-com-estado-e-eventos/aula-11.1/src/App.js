// src/App.js
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne = () => {
    this.setState((prevState, _props) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  };
  handleButtonTwo = () => {
    this.setState((prevState, _props) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  };
  handleButtonThree = () => {
    this.setState((prevState, _props) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }));
  };
  
  changeColor = (element) => {
    if(element % 2 === 0 && element !== 0){
      return 'green'
    }
  }
  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button onClick={this.handleButtonOne}
          style={{ backgroundColor: this.changeColor(clicksBtnOne)}}>
          Button one - {this.state.clicksBtnOne}
        </button>
        <button onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.changeColor(clicksBtnTwo)}}>
        Button two - {this.state.clicksBtnTwo}
        </button>
        <button onClick={this.handleButtonThree}
          style={{ backgroundColor: this.changeColor(clicksBtnThree)}}>
        Button three - {this.state.clicksBtnThree}
        </button>
      </div>
    );
  }
}

export default App;
