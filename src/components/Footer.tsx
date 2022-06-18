import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/Footer.module.css';

export function Footer () {
    
    return (
        
        <div className={`row`}>
            <div className={styles.footer}>
                <div>
                    <img src="/logo.svg" alt="" />
                </div>

                <div className={styles.footerComunications}>
                    <div>
                        <a href="https://api.whatsapp.com/send/?phone=5562981252225"> 
                            <FontAwesomeIcon icon={faWhatsapp} /> 
                        </a>
                        <a href="https://www.instagram.com/a.silvacustomknves/" target="_blank" rel="noopener noreferrer"> 
                            <FontAwesomeIcon icon={faInstagram} /> 
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"> 
                            <FontAwesomeIcon icon={faTiktok} /> 
                        </a>
                    </div>
                    
                    <div>
                        <p>Powered by <a href="https://gabrieldossantos.com.br" target="_blank" rel="noopener noreferrer">Gabriel dos Santos</a></p>
                        <p>Copyright © {new Date().getFullYear()} Todos os direitos reservados</p>
                    </div>
                    
                </div>
                <div id={styles.emptyDiv}>
                        
                </div>
            </div>
        </div>
    );

}