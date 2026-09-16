import React from 'react';
import TurnoItem from '../turnoItem.jsx/TurnoItem';
import styles from './ListaTurnos.module.css';

export default function ListaTurnos({ estadoPantalla, turnos, textoFiltro }) {

    if (estadoPantalla === 'cargando') {
        return <div className={styles.mensajeEstado}>Cargando los turnos de la barbería...</div>;
    }

    if (estadoPantalla === 'error') {
        return <div className={`${styles.mensajeEstado} ${styles.error}`}>Ocurrió un error al conectar con el sistema de la barbería. Intente nuevamente.</div>;
    }

    if (estadoPantalla === 'vacio') {
        return <div className={styles.mensajeEstado}>No hay turnos registrados para el día de hoy.</div>;
    }

    if (estadoPantalla === 'datos' && turnos.length === 0) {
        return <div className={styles.mensajeEstado}>No se encontraron turnos que coincidan con la búsqueda de "{textoFiltro}".</div>;
    }

    return (
        <div className={styles.lista}>
        {turnos.map(turno => (
            <TurnoItem key={turno.id} turno={turno} />
        ))}
        </div>
    );
}