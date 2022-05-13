import React, { Component } from "react";
import PersonalFieldset from "./components/PersonalFieldset";
import DataFieldset from "./components/DataFieldset";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      age: 0,
      anecdote: "",
      agree: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome, email, age, anecdote, agree } = this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <PersonalFieldset 
          nome = {nome}
          email = {email}
          age ={age}
          handleChange ={this.handleChange}
          />
          
          <DataFieldset 
          anecdote={anecdote}
          handleChange ={this.handleChange}
          />

          <label>
            Concordo com os termos
            <input
              type="checkbox"
              name="agree"
              onChange={this.handleChange}
              value={agree}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
