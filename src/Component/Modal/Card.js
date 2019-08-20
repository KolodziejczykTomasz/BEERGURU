import React from "react";
import styles from "../Modal/Card.module.scss";

const Card = props => (
  <div className={styles.Wrap}>

    <div className={styles.Aside}>
      <img
        className={styles.ImageBeer}
        src={props.image_url}
        alt={props.name}
      />
    </div>


    <div className={styles.Main}>
     <div className={styles.Main_Title}>
        <p><h1>{props.name} </h1></p>
        <p><h2>{props.tagline}</h2></p>
        <hr/>
      </div>

      <div className={styles.Main_Description}>
        <p><span>ebc:</span>{props.ebc}</p> 
        <p><span>ibu:</span> {props.ibu} </p>
        <p><span>abv:</span> {props.abv}</p>
       <p>{props.description}</p> 
      </div>
      <div className={styles.Main_BestServed}>
        <h4>Best served with: </h4>
      <ul>
{props.food_pairing.map(food => <li key={food.id}>- {food}</li>)}
      </ul></div>
    </div>


    <div className={styles.footer_wrap} >
    <div className={styles.food_pairing}><h4>You might also like:</h4></div>
    
    <div className={styles.footer_image}>
    <div key={props.ebc_image.id} className={styles.SingleFood} >
    
    <img
        className={styles.ImageBeer}
        src={props.ebc_image}
        alt={props.ebc_name}
      />
      <div><h4>{props.ebc_name}</h4></div>
      
      </div>
     <div key={props.ibu_image.id} className={styles.SingleFood} >
      <img
        className={styles.ImageBeer}
        src={props.ibu_image}
        alt={props.ibu_name}
      />
      <div><h4>{props.ibu_name}</h4></div>

      </div>
     <div key={props.abv_image.id} className={styles.SingleFood} >
      <img
        className={styles.ImageBeer}
        src={props.abv_image}
        alt={props.abv_name}
      />
      <div><h4>{props.abv_name}</h4></div>
      </div>
      </div>
  </div>
  </div>
  
);

export default Card;
