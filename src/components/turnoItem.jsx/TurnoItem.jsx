import React from 'react';
import styles from './TurnoItem.module.css';

export default function TurnoItem({ turno }) {
    return (
        <div className={styles.item}>
            <div className={styles.infoPrincipal}>
                <h3 className={styles.cliente}>{turno.cliente}</h3>
                <p className={styles.servicio}>Servicio: <span>{turno.servicio}</span></p>
                <p className={styles.barbero}>
                Barbero Asignado: {turno.barbero ? <strong>{turno.barbero}</strong> : <span className={styles.sinAsignar}>Sin asignar (En Espera)</span>}
                </p>
                <p className={styles.notas}>Notas: {turno.notas}</p>
            </div>
            <div className={styles.infoPrecio}>
                <span className={styles.etiqueta}>Total:</span>
                <span className={turno.precio === 0 ? styles.gratis : styles.monto}>
                {turno.precio === 0 ? 'Bonificado' : `$${turno.precio.toLocaleString()}`}
                </span>
            </div>
        </div>
    );
}