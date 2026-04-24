import imagem from '../components/layout/img/imgHome.jpg'
import imagem_1 from '../components/layout/img/banner.png'
import imagem_2 from '../components/layout/img/sistema-html-para-o-conceito-de-sites.jpg'
import imagem_4 from '../components/layout/img/logo mkt.jpg'
import imagem_5 from '../components/layout/img/imagem_sistemas.jpg'
import imagem_6 from '../components/layout/img/hardware_rede.jpg'
import imagem_7 from '../components/layout/img/agente_IA.jpg'
import imagem_8 from '../components/layout/img/acessoria_TI.jpg'
import imagem_9 from '../components/layout/img/cyber_seguranca.jpg'
import styles from './Home.module.css';

function Home() {
    return (
 
        <section className={styles.home_container}>
            <div className={styles.heroBanner}>
  <img src={imagem_1} alt="Banner Alltech" />
</div>

            <ul>
                <li className={styles.image_item}>
                    <img src={imagem_5} alt="imagem" />
                    <span>Soluções em software desktop ou mobile!</span>
                </li>
                
                <li className={styles.image_item}>
                    <img src={imagem_2} alt="imagem" />
                    <span>Desenvolvimento de sistemas web!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_6} alt="imagem" />
                    <span>Manutenção em hardware e redes!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_6} alt="imagem" />
                    <span>Manutenção em hardware e redes!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_7} alt="imagem" />
                    <span>Automatização de processos e agente de IA!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_9} alt="imagem" />
                    <span>Cibersegurança e Proteção de Dados!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_8} alt="imagem" />
                    <span>Consultoria em Ti e Redes!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_4} alt="imagem" />
                    <span>Soluções em Marketing digital!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem} alt="imagem" />
                    <span>Soluções sob medida para MEI!</span>
                </li>
            </ul>


        </section>





    )
};

export default Home;