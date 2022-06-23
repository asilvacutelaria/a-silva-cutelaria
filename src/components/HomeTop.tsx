import { useContext, useEffect } from 'react';

import { NavBarContext } from '../contexts/NavBarContext';

import styles from '../styles/components/HomeTop.module.css';

export function HomeTop () {
    const { handleFixed } = useContext(NavBarContext);    
    
    useEffect (() => {
      document.addEventListener('scroll', e => {
        let scrollPosition = document.scrollingElement !== null ? document.scrollingElement.scrollTop : 0;
        if (scrollPosition > 50) {
          handleFixed(true);                   
        } else {
          handleFixed(false);          
        }
      });
    }, []); 

    return (
    
        <div id="home" className={`row`}>
            <div className={styles.homeContainer}>
                <div>
                    <h1>As melhores facas<br/>artesanais do mundo!</h1>
                    <h4>Toda qualidade e atenção aos detalhes que uma faca precisa</h4>
                    <button><a href={process.env.REACT_APP_LINK_WHATSAPP_CUTELARIA}>faça seu pedido</a></button>
                </div>

                <div>
                    <img src="/Img_Headline.svg" alt="" />
                </div>
            </div>
        </div>
    );

}