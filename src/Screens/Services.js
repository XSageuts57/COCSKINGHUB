import React from 'react';
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Plataforma de cocina<br />innovadora</h3>
        <p className={styles.description}>
        <br/>
          Conéctate con otros amantes de la cocina y comparte tus recetas en<br />
          Cookinghub, la plataforma diseñada para entusiastas de la cocina.
        </p>
        <br/>
        <br/>
        <a href="#explore" className={styles.discoverButton}>Descubre
        <br/>
        </a>
      </div>
      <img 
        className={styles.webImage} 
        src={require('../assets/pai.jpg')}
        alt="Cookinghub"
      />
    </div>
  );
};

export default Services;
