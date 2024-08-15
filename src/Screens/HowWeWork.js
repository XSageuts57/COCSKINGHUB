import React from 'react';
import styles from './HowWeWork.module.css';
import Step from '../Components/Step'; // Asegúrate de tener un componente Step o usa imágenes directamente

const HowWeWork = () => {
  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>Plataforma de cocina</h2>
      <p className={styles.subtitle}>
        Comparte y descubre recetas. Conecta con otros amantes de la cocina. Gestiona tu
        <p className={styles.subtitle}>perfil.</p>
      </p>
      <div className={styles.stepContainer}>
        <div className={styles.step}>
          <img src={require('../assets/imagen1.jpg')} alt="Conexión de cocineros" />
          <h3 className={styles.stepTitle}>Conexión de cocineros</h3>
          <p className={styles.stepDescription}>
            Facilita la conexión entre cocineros aficionados y profesionales. Experiencia enriquecedora y accesible.
          </p>
        </div>
        <div className={styles.step}>
          <img src={require('../assets/imagen2.jpg')} alt="Interactúa con otros" />
          <h3 className={styles.stepTitle}>Interactúa con otros</h3>
          <p className={styles.stepDescription}>
            Comenta y valora recetas. Interacción con la comunidad de amantes de la cocina.
          </p>
        </div>
        <div className={styles.step}>
          <img src={require('../assets/imagen3.jpg')} alt="Gestiona tu perfil" />
          <h3 className={styles.stepTitle}>Gestiona tu perfil</h3>
          <p className={styles.stepDescription}>
            Experiencia enriquecedora y accesible para todos los usuarios de la plataforma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
