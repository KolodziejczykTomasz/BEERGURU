import React from "react";

import styles from "../Display/ButtonList.module.scss";


const ButtonList = props => (
  <button
  className={styles.button}
  onClick={props.listChanged}
  >List</button> 
);


export default ButtonList;