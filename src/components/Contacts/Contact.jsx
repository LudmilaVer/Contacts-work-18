import React from 'react';
import snapchatLogo from '../../assets/snapchat.svg';
import facebookLogo from '../../assets/facebook.svg';
import xLogo from '../../assets/twitter-x.svg';

import styles from './Contacts.module.css';


const Contacts = () => {
    return (
        <section className={styles.contactsSection}>
            <div className={styles.contactsContainer}>
                <h1>Контакты</h1>
                <ul className={styles.contactInfo}>
                    <li>Телефон: +1234567890</li>
                    <li>Email: example@example.com</li>
                </ul>
                <form className={styles.contactForm}>
                    <input type="email" placeholder="Ваш email" className={styles.inputField} />
                    <input type="text" placeholder="Ваше имя" className={styles.inputField} />
                    <textarea placeholder="Ваше сообщение" className={styles.inputText}></textarea>
                    <button type="submit" className={styles.submitButton}>Отправить</button>
                </form>
            </div>
            <div className={styles.socialMediaContainer}>
                <p>Найдите нас на:</p>
                <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
                    <img src={snapchatLogo} alt="Snapchat" className={styles.socialIconSnap} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" className={styles.socialIconFace} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={xLogo} alt="X" className={styles.socialIconX} />
                </a>
               
                
            </div>
        </section>
    );
};

export default Contacts;