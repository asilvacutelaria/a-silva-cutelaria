import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/About.module.css';

export function About () {
    
    return (
        
        <div className={`row`}>
            <div className={styles.aboutContainer}>
                <div>
                    <h1>Sobre o Cuteleiro</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi vel erat malesuada venenatis. Nam at ligula interdum, facilisis neque non, laoreet mi. Vestibulum at ullamcorper velit. Etiam nec porttitor erat. Sed auctor nisi at mi consequat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla semper elit quam, in varius leo tristique at. Quisque eu turpis eros. Phasellus gravida dui sit amet lorem consectetur, quis euismod erat accumsan. Phasellus in venenatis turpis. Donec vitae ex dui. Nunc eleifend ultricies tellus sed interdum. Sed tempor dui sit amet nibh iaculis tempor. Ut sollicitudin sapien vitae orci dictum, non facilisis magna sagittis. Donec eget pharetra lorem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisi vel erat malesuada venenatis. Nam at ligula interdum, facilisis neque non, laoreet mi. Vestibulum at ullamcorper velit. Etiam nec porttitor erat. Sed auctor nisi at mi consequat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla semper elit quam, in varius leo tristique at. Quisque eu turpis eros. Phasellus gravida dui sit amet lorem consectetur, quis euismod erat accumsan. Phasellus in venenatis turpis. Donec vitae ex dui. Nunc eleifend ultricies tellus sed interdum. Sed tempor dui sit amet nibh iaculis tempor. Ut sollicitudin sapien vitae orci dictum, non facilisis magna sagittis. Donec eget pharetra lorem.
                    </p>
                </div>

                <div>
                    <img src="/Img_Headline.png" alt="" />
                </div>
            </div>
        </div>
    );

}