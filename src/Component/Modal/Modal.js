import React from "react";
import Card from "../Modal/Card";

import styles from "../Modal/Modal.module.scss";

class Modal extends React.Component {
  state = {
    show: false
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.wrapper}>
        <button
          className={styles.closeButton}
          onClick={e => {
            this.onClose(e);
          }}
        />
        <Card
          name={this.props.name}
          tagline={this.props.tagline}
          ebc={this.props.ebc}
          ibu={this.props.ibu}
          abv={this.props.abv}
          description={this.props.description}
          food_pairing={this.props.food_pairing}
          image_url={this.props.image_url}
          ebc_image={this.props.ebc_image}
          ibu_image = {this.props.ibu_image}
          abv_image = {this.props.abv_image}
          ebc_name={this.props.ebc_name}
          ibu_name = {this.props.ibu_name}
          abv_name = {this.props.abv_name}
        />
      </div>
    );
  }
}

export default Modal;
