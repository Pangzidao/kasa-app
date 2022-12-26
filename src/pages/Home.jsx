import styles from "../styles/Home.module.css"
import ApartmentCard from "../components/ApartmentCard";
import apartments from "../datas/apartments.json";
import React from 'react';

const renderCards = () => {
  return apartments.map((apartment) => {
    return (<div>
              <ApartmentCard key={apartment.id} name={apartment.title} image={apartment.cover} />
            </div>
  )});
};

function Home() {
  return (
  <div>
    <div className={styles.topSection}>
      <h2 className={styles.topSectionTitle}>Chez vous, partout et ailleurs</h2>
    </div>
    <div className={styles.apartmentsList}>
      {renderCards()}
    </div>
  </div>
  
  )
}

export default Home;
