import "./App.css";
import { Component } from "react";
import pokemons from "./data/data";
import Pokedex from ".components/Pokedex";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
            <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
