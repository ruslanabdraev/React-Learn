import React from "react";
import PokedexItem from "./PokedexItem.js";

// export default function Pokedex({list}) {
//   return <div>{list.map(p => <p>{p.name}</p>)}</div>;
// };

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.loadDetails = this.loadDetails.bind(this);

    this.state = {
      name: "",
      weight: 0,
      height: 0,
      front_default: ""
    };
  }

  loadDetails(name) {
    const { list } = this.props;
    var item = list.filter(i => i.name === name)[0];

    fetch(item.url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          name: response.name,
          weight: response.weight,
          height: response.height,
          front_default: response.sprites.front_default
        });
      });
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        {list.map((d, i) => (
          <PokedexItem key={i} item={d} details={this.state} OnClick={this.loadDetails} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
