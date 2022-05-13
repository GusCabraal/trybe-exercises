import {Component} from 'react';
import PropTypes from "prop-types";

class PersonalFieldset extends Component {
    render() {
    const { nome, email, cpf, address, city, state, houseType, handleChange } = this.props;
    return (
      <fieldset className="fieldset">
        <legend>Dados pessoais</legend>
        <label>
          Digite o nome completo
          <input type="text" name="nome" value={nome.toUpperCase()} onChange={handleChange} />
        </label>
        <label>
          Digite o email
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          Digite o cpf
          <input type="text" name="cpf" value={cpf} onChange={handleChange} />
        </label>
        <label>
          Digite o endereço
          <input type="text" name="address" value={address} onChange={handleChange} />
        </label>
        <label>
          Digite a cidade
          <input type="text" name="city" value={city} onChange={handleChange} />
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
