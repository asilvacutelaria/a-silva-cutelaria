import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowRight, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/HomeRaffles.module.css';

export function HomeRaffles () {

    return (
    
        <div id="raffles" className={`row`}>
            <div className={styles.homeRaffles}>
                <div>
                    <img src="/Img_Raffles.svg" alt="" />
                </div>
                <div className={styles.phoneImg}>
                    <img src="/Phone_md.svg" alt="" />
                </div>

                <div>
                    <h1>Rifas do cuteleiro</h1>
                    <h4>Entre no grupo do<br/>WhatsApp e fique atento!</h4>
                    <p>Regularmente o cuteleiro realiza rifas de alguma(s) de suas peças, entre no grupo e fique por dentro!</p>
                    <p> Você pode participar do grupo no WhatsApp e ficar por dentro 
                        de todas as atualizações, eventos e rifas de peças do 
                        cuteleiro. O acesso e permanência ao grupo é gratuito.
                    </p>
                    <div className={styles.linkRaffles}>
                        <div>
                            <FontAwesomeIcon icon={faFileLines} /> 
                            <a href={process.env.REACT_APP_LINK_GRUPO_RIFA_WHATSAPP}>Regulamento de participação das rifas</a>
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} /> 
                            <a href={process.env.REACT_APP_LINK_GRUPO_RIFA_WHATSAPP}>Entre no grupo agora mesmo</a>
                            <FontAwesomeIcon icon={faAngleRight} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}