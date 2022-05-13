import { Component } from "react";
import PersonalFieldset from "./PersonalFieldset";
import '../form.css'

class Form extends Component {
  state = {
    nome: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    houseType: ''
  };
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { nome, email, cpf, address, city, state, houseType } = this.state;
    return (
      <div>
          <h1>
          Formulario de teste
        </h1>
        <form>
          <PersonalFieldset
            nome={nome}
            email={email}
            cpf={cpf}
            address={address}
            city={city}
            state={state}
            houseType={houseType}
            handleChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
