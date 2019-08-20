import React from "react";
import Modal from "../Modal/Modal";
import styles from "../Fetch/List.module.scss";

class List extends React.Component {
  state = {
    items: "",
    card: "",
    ebcState: "",
    ibuState: "",
    abvState: "",
    isLoaded: false,
    isModalOpen: false
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=20")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  handleChangeList = () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  };

  handleSelect = id => {
    const items = [...this.state.items];
    const index = items.find(index => index.id === id); 
    this.setState(
      {
        card: index,
      
      },
      function() {}
    );
    const ebc = items.find(item => item.ebc === index.ebc);
    this.setState(
      {        
        ebcState: ebc
      },
      function() {}
    );
    const ibu = items.find(item => item.ibu === index.ibu);
    this.setState(
      {        
        ibuState: ibu
      },
      function() {}
    );
    const abv = items.find(item => item.abv === index.abv);
    this.setState(
      {        
        abvState: abv
      },
      function() {}
    );
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    let { isLoaded, items, show } = this.state;
    let {name, tagline, ebc, ibu, abv, description, image_url, food_pairing  } = this.state.card;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.App}>
          <div className={styles.Title}>
            beer<span className={styles.TitleOrange}>guru</span>
          </div>
          {items.map(item => (
            <div
              className={styles.wrap}
              key={item.id}
              id={item.id}
              onClick={() => {
                this.showModal();
                this.handleSelect(item.id);
              }}
            >
              <div className={styles.ListBeer} key={item.id}>
                <img
                  className={styles.ImageBeer}
                  src={item.image_url}
                  alt={item.name}
                />
              </div>
              <div className={styles.Description}>
                <h1>{item.name}</h1>
                <h2>{item.tagline}</h2>
              </div>
            </div>
          ))}

          <Modal
            show={show}
            onClose={this.showModal}
            name={name}
            tagline={tagline}
            ebc={ebc}
            ibu={ibu}
            abv={abv}
            description={description}
            image_url={image_url}
            food_pairing={food_pairing}
            ebc_image={this.state.ebcState.image_url}
            ibu_image={this.state.ibuState.image_url}
            abv_image={this.state.abvState.image_url}
            ebc_name={this.state.ebcState.name}
            ibu_name={this.state.ibuState.name}
            abv_name={this.state.abvState.name}
          />

          {/* <ButtonList listChanged={this.handleChangeList} /> */}
        </div>
      );
    }
  }
}

export default List;
