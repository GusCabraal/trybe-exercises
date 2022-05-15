import { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //todos os pokemons
      pokemons: props.pokemons,
      
      currentIndex: 0,
      //pokemons filtrados
      myListPokemons: props.pokemons,
      filter: '',
    };
  }
  next() {
    this.setState((prevState) => {
        let nextIndex = prevState.currentIndex + 1
        if (prevState.myListPokemons.length - 1 === prevState.currentIndex)
        nextIndex = 0
        return {
            currentIndex: nextIndex
        } 
    })
  }
  filterPokemon(Filter) {
      this.setState({ 
          filter: Filter,
          myListPokemons: this.state.pokemons.filter(({ type }) => {
              if(Filter === '')
              return true
                return type === Filter
      }),
      currentIndex: 0,
    })
  }
  listHasMoreThanOne (){
    return this.state.myListPokemons.length === 1;
  }

  getTypesPokemons(){
    const types = this.state.pokemons.map(({ type }) => type);
    return([...new Set(types)].sort());
  }

  render() {
    const { currentIndex, myListPokemons } = this.state;
    return (
      <>
        <div>
            <button onClick={() => this.filterPokemon('')}>All</button>

            {this.getTypesPokemons().map((pokemon) => 
          <button key={ pokemon } onClick={() => this.filterPokemon(pokemon)}>{pokemon}</button>)}

        </div>
        <div className="cardlist">
          {
            <Pokemon
              key={ myListPokemons[currentIndex].id}
              pokemon={myListPokemons[currentIndex]}
            />
          }
        </div>
        <div>
          <button
            onClick={() => this.next()}
            disabled={ this.listHasMoreThanOne() }
            >Próximo</button>
        </div>
      </>
    );
  }
}

export default Pokedex;
