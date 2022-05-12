import React, { Component } from "react";
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
    const { nome, email, age, anecdote, agree} = this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              name="nome"
              onChange={this.handleChange}
              value={nome}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
              onChange={this.handleChange}
              value={age}
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea
              id="anecdote"
              name="anecdote"
              onChange={this.handleChange}
              value={anecdote}
            />
          </label>
          <label>
            Adicione os arquivos extras
            <input type="file" />
          </label>
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
