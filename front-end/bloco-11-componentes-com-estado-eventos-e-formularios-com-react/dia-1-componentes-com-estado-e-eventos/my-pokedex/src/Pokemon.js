import { Component } from "react";

class Pokemon extends Component {
  render() {
      const { name, type, image, averageWeight } = this.props.pokemon;
      const { value: peso, measurementUnit: un } = averageWeight;
    return (
            <div className="card">
              <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{`${peso} ${un}`}</p>
              </div>
              <img src={image} alt={`${name} sprite`} />
            </div>
          );
    }
}

export default Pokemon;