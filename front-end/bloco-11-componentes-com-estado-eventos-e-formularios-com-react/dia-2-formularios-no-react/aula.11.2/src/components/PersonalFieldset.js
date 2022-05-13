import { Component } from "react";
import PropTypes from "prop-types";

class PersonalFieldset extends Component {
  render() {
    const { nome, email, age, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Informações pessoais</legend>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            name="nome"
            onChange={handleChange}
            value={nome}
          />
          { !nome.length ? ' -nome inválido- ' : ' -ok- '}
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label htmlFor="age">
          Idade:
          <select
            id="age"
            name="age"
            defaultValue=""
            onChange={handleChange}
            value={age}
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
          { !age.length ? ' -idade inválida- ' : ' -ok- '}
        </label>
      </fieldset>
    );
  }
}
PersonalFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default PersonalFieldset;
