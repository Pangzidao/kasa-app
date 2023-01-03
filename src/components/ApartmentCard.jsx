import React from 'react';
import styles from '../styles/ApartmentCard.module.css'
import { Link } from 'react-router-dom';

function ApartmentCard(props){
  return (
    <Link to={`/apartment/${props.id}`} className={styles.apartmentCard}>
      <img src={props.image} alt="Apartment" className={styles.image}/>
      <h3 className={styles.apartmentName}>{props.name}</h3>
    </Link>
  );
};

export default ApartmentCard;