import React from "react";

import styles from "../Display/ButtonRandom.module.scss";


const ButtonRandom = props => (
  <button
  className={styles.button}
  onClick={props.randomChanged}
  >Random</button> 
);


export default ButtonRandom;