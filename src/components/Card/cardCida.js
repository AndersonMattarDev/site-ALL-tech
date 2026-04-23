import React from 'react';
import styles from './cardCida.module.css';
import imagem from '../layout/img/logoAntiga.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaUtensils } from 'react-icons/fa';

function CardCida() {
  return (
    <section className={styles.card}>
      <Link to="/deliciascida">
        <div className={styles.content}>
          <FaUtensils className={styles.icon} />
          <h3>Delícias da Cida</h3>
          <p>Salgados deliciosos feitos com amor</p>
        </div>
        <img src={imagem} alt="logo" className={styles.image} />
      </Link>
    </section>
  );
}

export default CardCida;