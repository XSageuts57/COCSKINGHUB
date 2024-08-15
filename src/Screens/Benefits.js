import React from "react";
import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h3 className={styles.benefitTitle}>RECETAS COMPARTIR</h3>
      <p className={styles.benefitDescription}>
        Plataforma innovadora para entusiastas de la cocina. Comparte <br />y descubre recetas.
      </p>
      <p></p>
      <div className={styles.imageContainer}>
        <img src={require("../assets/foto1.jpg")} alt="Imagen 1" className={styles.image} />
        <img src={require("../assets/foto2.jpg")} alt="Imagen 2" className={styles.image} />
        <img src={require("../assets/foto3.jpg")} alt="Imagen 3" className={styles.image} />
        <img src={require("../assets/foto4.jpg")} alt="Imagen 4" className={styles.image} />
      </div>
      <h3 className={styles.customerReviewsTitle}>Opiniones de clientes</h3>
      <p className={styles.customerReviewsDescription}>
        Descubre lo que dicen nuestros usuarios sobre la plataforma CookingHub.
      </p>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewBox}>
          <div className={styles.profileImage}></div> {/* Imagen de perfil */}
          <div className={`${styles.reviewTextContainer} ${styles.adjustableTextContainer}`}>
            <h4 className={styles.estrellitas}>★★★★★</h4>
            <p>CookingHub ha sido una revelación para mí. Me encanta poder compartir mis recetas y recibir comentarios de otros usuarios.</p>
            <p className={styles.textamarillobox}>Juan Pérez</p>
            <p className={styles.descripcionboox}>Barcelona</p>
          </div>
        </div>
        <div className={styles.reviewBox}>
          <div className={styles.profileImage}></div> {/* Imagen de perfil */}
          <div className={`${styles.reviewTextContainer} ${styles.adjustableTextContainer}`}>
            <h4 className={styles.estrellitas}>★★★★★</h4>
            <p>Excelente plataforma para compartir recetas! Me encanta la interacción con otros amantes de la cocina.</p>
            <p className={styles.textamarillobox}>María González</p>
            <p className={styles.descripcionboox}>Madrid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
