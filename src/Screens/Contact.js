import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>DESCUBRE</h3>
          <p>Plataforma innovadora diseñada para entusiastas de la cocina</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" className={styles.fb}></a>
            <a href="https://instagram.com" className={styles.ig}></a>
            <a href="https://tiktok.com" className={styles.tiktok}></a>
            <a href="https://twitter.com" className={styles.twitter}></a>
          </div>
          <p className={styles.footerText}>© 2024. All rights reserved.</p>
        </div>
        
        <div className={styles.contactDetails}>
          <h4>INTEGRANTES</h4>
          <p>Diego Cañari</p>
          <p className={styles.myname}>BENJAMIN AMAYO (CREADOR)</p>
          <p>Fabio Sansoni</p>
          <p>Anghelo Chirinos</p>
        </div>

        <div className={styles.contactShare}>
          <h4>COMPARTE</h4>
          <p>977 384 380</p>
          <p>COOKINGHUB69@GMAIL.COM</p>
        </div>
        
        <div className={styles.contactFormWrapper}>
          <h4>CONECTA</h4>
          <p>Correo electrónico para recetas</p>
          <form
            className={styles.contactForm}
            method="POST"
            action="https://getform.io/f/alljgrza"
          >
            <input type="email" placeholder="Ingrese su correo electrónico aquí  " />
            <button type="submit">Enviar receta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
