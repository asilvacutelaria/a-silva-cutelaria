import { useContext, useState } from 'react';
import { Link } from 'react-scroll';

import { faGithub, faInstagram, faLinkedin, faTelegram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavBarContext } from '../contexts/NavBarContext';

import styles from '../styles/components/NavBar.module.css';


export function NavBar() {
    
    const [activeColapseNavBarToggle, setActiveColapseNavBarToggle] = useState(false);

    const { isFixed } = useContext(NavBarContext);

    function handleColapseNavBar(e: any) {
        if (e !== null) {
            e.preventDefault();
        }
        setActiveColapseNavBarToggle(!activeColapseNavBarToggle);
    }

    return(
        
        <header className={isFixed ? `row ${styles.header} ${styles.fixed}` : `row ${styles.header}`}>
        <h1 className='font-zero'>A. Silva Cutelaria, Custom Knives</h1>
        
        <div className='content'>
            
            <div className={styles.headerLogo}>
                <a href="" title="A. Silva Cutelaria">
                    <img src="/logo.svg" alt="Logomarca" />
                </a>
            </div>            
            
            <a 
                href="" 
                id={styles.navToggle} 
                className={activeColapseNavBarToggle ? styles.active : ''} 
                onClick={(e) => handleColapseNavBar(e)}
            >
                <span></span>
                <span></span>
                <span></span>
            </a>
            
            <div className={`${styles.headerCollapse} ${activeColapseNavBarToggle ? styles.active : ''}`}>

              <nav className={styles.headerNav}>

                  <h1 className='font-zero'>Navegação do site</h1>
                  <ul>
                      <li>
                          <a className={styles.itemNavbar} href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}>Encomendas</a>
                          {/* <Link 
                            activeClass={styles.active}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={activeColapseNavBarToggle ? () => handleColapseNavBar(null) : () => {}}
                            >
                                <p className={styles.itemNavbar}>Encomendas</p>
                            </Link> */}
                        </li>
                        <li>
                            <Link 
                                activeClass={styles.active}
                                to="raffles"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={activeColapseNavBarToggle ? () => handleColapseNavBar(null) : () => {}}
                                >
                                    <p className={styles.itemNavbar}>Rifas</p>
                            </Link>
                        </li>
                        <li>     
                            <Link 
                                activeClass={styles.active}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={activeColapseNavBarToggle ? () => handleColapseNavBar(null) : () => {}}
                                >
                                    <p className={styles.itemNavbar}>Sobre o cuteleiro</p>
                            </Link>                             
                        </li>
                    </ul>

                </nav>

                <div className={styles.headerButtons}>
                    <div className={styles.headerButton}>
                        <button><a href={process.env.REACT_APP_LINK_GRUPO_RIFA_WHATSAPP}>entrar no grupo</a></button>
                        <button><a href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}>faça seu pedido</a></button>
                    </div>
                </div>
                    
                    
                

                <div className={styles.headerRedes}>
                    <a href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}> 
                        <FontAwesomeIcon icon={faWhatsapp} /> 
                    </a>
                    <a href={process.env.REACT_APP_LINK_INSTAGRAM_CUTELARIA} target="_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href={process.env.REACT_APP_LINK_TIKTOK_CUTELARIA} target="_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon icon={faTiktok} /> 
                    </a>
                </div>

            </div>
        </div>
      </header>

    );

}
