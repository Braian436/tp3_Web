import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>

                <div className={styles.infoFila}>
                    <div className={styles.infoColumna}>
                        <p>© 2026 | Barbería Clase A</p>
                    </div>
                    <div className={styles.infoColumna}>
                        <p>Nuestra Dirección Balcarce 1100</p>
                    </div>
                    <div className={styles.infoColumna}>
                        <p>A tu servicio (0387) 2464676</p>
                    </div>
                </div>

                <hr className={styles.dividir} />

                <div className={styles.socialFila}>
                    <a href="#facebook" className={styles.socialIcon}>
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#instagram" className={styles.socialIcon}>
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#whatsapp" className={styles.socialIcon}>
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    );
}