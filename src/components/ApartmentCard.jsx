import React from 'react';
import styles from '../styles/ApartmentCard.module.css'

function ApartmentCard(props){
  return (
    <div className={styles.apartmentCard}>
      <img src={props.image} alt="Apartment" className={styles.image}/>
      <h3 className={styles.apartmentName}>{props.name}</h3>
    </div>
  );
};

export default ApartmentCard;