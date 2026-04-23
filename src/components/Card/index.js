import React from 'react';
import styles from './Card.module.css';
import imagem from '../layout/img/capaCroche.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaHandPaper } from 'react-icons/fa';

function Card() {
  return (
    <section className={styles.card}>
      <Link to="/artesanato">
        <div className={styles.content}>
          <FaHandPaper className={styles.icon} />
          <h3>Artesanato</h3>
          <p>Produtos feitos à mão com dedicação</p>
        </div>
        <img src={imagem} alt="logo" className={styles.image} />
      </Link>
    </section>
  );
}

export default Card;
