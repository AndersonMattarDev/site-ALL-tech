import { FaLinkedin, FaGithubAlt, FaEnvelope,  FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Contato.module.css';
import LinkButton from '../components/layout/LinkButton'
import imagem from '../components/layout/img/logoAlltech.jpeg'

function Contato() {
    return (
      <div className={styles.conteudo}>
        <div className={styles.contactsContainer}>
          <div className={styles.links}>
            <h1>Contatos</h1>
            <a href="mailto:andmat7745@gmail.com">
              {" "}
              <span>
                <FaEnvelope />
              </span>{" "}
              E-mail
            </a>
            <a href="https://github.com/AndersonMattarDev">
              <span>
                <FaGithubAlt />
              </span>
              GitHub
            </a>
            <a
              href="https://wa.me/5532984240038?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20seus%20serviços!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaWhatsapp />
              </span>{" "}
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/anderson-moreno-mattar-05347b257/">
              <span>
                <FaLinkedin />
              </span>{" "}
              Linkedin
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088499396412">
              <span>
                <FaFacebook />
              </span>{" "}
              Facebook
            </a>
            <a href="https://www.instagram.com/mattarandersonmoreno/">
              <span>
                <FaInstagram />
              </span>
              Instagram
            </a>

            <div className={styles.linkButtonCustom}>
              <LinkButton to="/message" text="Enviar Mensagem" />
            </div>
            
          </div>

          <div className={styles.imageContainer}>
            <img src={imagem} alt="logo" />
          </div>
        </div>
      </div>
    );
};

export default Contato;