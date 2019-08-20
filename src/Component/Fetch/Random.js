import React from "react";
import ButtonRandom from "../Display/ButtonRandom";

import styles from "../Fetch/Random.module.scss";

class FetchRandom extends React.Component {
  state = {
    items: "",
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(res => res.json())
      .then(json => {

        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  handleChangeRandom = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  };


  render() {
    let { isLoaded, items } = this.state;
    
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="style.App">
          Data has been loaded
          <ul>
            {items.map(item => (
              <li 
              key={item.id}       
              >
                <h1>{item.name}</h1>
                <h2>{item.tagline}</h2>
               
                <img src={item.image_url} alt={"logo"}/>
            
                <p>{item.description}</p>
        
              </li>
              
            ))}
          </ul>
          

          <ButtonRandom randomChanged={this.handleChangeRandom} />
        </div>
      );
    }
  }
}

export default FetchRandom;
