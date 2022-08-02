import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/About.module.css';

export function About () {
    let age = new Date().getFullYear()-1981;
    
    return (
        
        <div id="about" className={`row`}>
            <div className={styles.aboutContainer}>
                <div id={styles.text}>
                    <h1>Sobre o Cuteleiro</h1>
                    <p>
                        Olá, meu nome é Alexandre Silva, brasileiro com {age} anos e sou cuteleiro de paixão. Confeccionei a minha primeira faca por curiosidade, através de vídeos da internet, com materiais simples e forno improvisado, não ficou exatamente como o esperado, mas na segunda já ficou melhor. Desde então não parei com as produções, e o esforço levaram-me a estudar sobre, fiz diversos cursos como:
                    </p>
                    <ul>
                        <li>Produção de facas,</li>
                        <li>Tratamento térmico dos metais,</li>
                        <li>Facas por desbaste,</li>
                        <li>Facas EDC Cuteleiro Hobista.</li>
                    </ul>
                    <p>
                        Todos com grandes nomes do mercado de cuteleiros. Com o tempo desenvolvi estratégias que me fazem produzir as melhores facas artesanais do brasil, onde hoje me dedico a cutelaria desenvolvendo e forjando mais do que facas, artes através de um cutelo. 
                        <br/>
                        Te convido a vir conhecer o meu trabalho e adquirir a sua melhor faca para o churrasco clicando <a href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}>aqui</a>.
                    </p>
                    <div className={styles.contacts}>
                        <div id={styles.whatsapp}>
                            <FontAwesomeIcon icon={faWhatsapp}/>
                            <a href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}>Entre em contato no WhatsApp</a>
                        </div>
                        <div id={styles.instagram}>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <a href={process.env.REACT_APP_LINK_INSTAGRAM_CUTELARIA}>Me siga no Instagram</a>
                        </div>
                        <div id={styles.tiktok}>
                            <FontAwesomeIcon icon={faTiktok}/>
                            <a href={process.env.REACT_APP_LINK_TIKTOK_CUTELARIA}>Me acompanhe no TikTok</a>
                        </div>
                    </div>
                </div>

                <div id={styles.idImg}>
                    <img src="/Img_About.png" alt="" />
                </div>
            </div>
        </div>
    );

}