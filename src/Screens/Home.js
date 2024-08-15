import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-scroll'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={require('../assets/comiendo.mp4')}
          width='100%'
          height='100%'
          playing
          muted
          loop
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>Descubre nuevas recetas de cocina aquí</h1>
          <h2 className={styles.subTitle}>Plataforma innovadora para compartir y descubrir recetas de manera sencilla y eficiente</h2>
          <Link
            to="Contact"
            smooth
            duration={500}
            className={styles.callToAction}
          >
            Explora y únete
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
