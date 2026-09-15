import React from "react";
import Logo from "../../assets/LOGO-BARBER.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                
                {/* Logo */}
                <a href="#inicio" className={styles.brand}>
                    <img src={Logo} alt="Barbería Clase A" className={styles.logoRedondo} />
                </a>

                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>
                        <a href="#inicio" className={`${styles.botonLindo} ${styles.botonActivo}`}>
                            Inicio
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#servicios" className={styles.botonLindo}>
                            Servicios
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#nosotros" className={styles.botonLindo}>
                            Nosotros
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contacto" className={styles.botonLindo}>
                            Contacto
                        </a>
                    </li>
                </ul>
                
            </nav>
        </header>
    );
}