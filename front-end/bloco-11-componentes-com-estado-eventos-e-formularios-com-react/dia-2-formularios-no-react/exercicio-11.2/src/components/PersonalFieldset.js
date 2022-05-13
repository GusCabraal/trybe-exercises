import {Component} from 'react';
import PropTypes from "prop-types";
const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalFieldset extends Component {
    render() {
    const { nome, email, cpf, address, city, handleChange, onBlurHandler } = this.props;
    return (
      <fieldset className="fieldset">
        <legend>Dados pessoais</legend>
        <label>
          Digite o nome completo
          <input 
            type="text" 
            name="nome" 
            value={nome.toUpperCase()} 
            onChange={handleChange}
            required
            maxLength="40"
            />
        </label>
        <label>
          Digite o email
          <input 
          type="email" 
          name="email" 
          value={email}
          onChange={handleChange}
          maxLength="50"
          required 
          />
        </label>
        <label>
          Digite o cpf
          <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={handleChange}
          maxLength="11"
          required      
          />
        </label>
        <label>
          Digite o endereço
          <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          maxLength="200"
          required 
          />
        </label>
        <label>
          Digite a cidade
          <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          onBlur={onBlurHandler}
          />
          </label>
          <label>
            Estado:
            <select
              name="countryState"
              required
              onChange={handleChange}
              defaultValue=""
            >
              <option value="">Selecione</option>
              {
                states.map((value, key) => (
                  <option key={ key }>{ value }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="house">
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
              onChange={handleChange}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apartment"
              onChange={handleChange}
            />
            Apartamento
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
