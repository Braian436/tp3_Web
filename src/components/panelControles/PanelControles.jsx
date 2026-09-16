import React from 'react';
import styles from './PanelControles.module.css';

export default function PanelControles({ filtroActual, cambiarFiltro, ordenActual, ordenar, simularEstado }) {
    return (
        <div className={styles.panel}>
            <div className={styles.interacciones}>
                <input type="text" placeholder="Filtrar por servicio..." value={filtroActual}onChange={cambiarFiltro} className={styles.inputFiltro}/>
                <button onClick={ordenar} className={styles.btnOrdenar}>
                    Ordenar por precio: {ordenActual === 'asc' ? 'Menor a Mayor' : 'Mayor a Menor'}
                </button>
            </div>

            <div className={styles.simuladores}>
                <span className={styles.textoSimulacion}>Simular estados:</span>
                <button onClick={() => simularEstado('cargando')}>Cargando</button>
                <button onClick={() => simularEstado('error')}>Error</button>
                <button onClick={() => simularEstado('vacio')}>Vacío</button>
                <button onClick={() => simularEstado('datos')}>Con Datos</button>
            </div>
        </div>
    );
}