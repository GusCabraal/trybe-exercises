import "./App.css";
import { Component } from "react";

class Pokedex extends Component {
  render() {
    return (
      <div className="cardlist">
        {this.props.pokemons.map((pokemon) => {
          const { id, name, type, image, averageWeight } = pokemon;
          const { value: peso, measurementUnit: un } = averageWeight;
          return (
            <div className="card" key= {id} >
              <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{`${peso} ${un}`}</p>
              </div>
              <img src={image} alt={`${name} sprite`} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
