import React from 'react';
import styles from './PanelControles.module.css';

export default function PanelControles({ filtroActual, onFiltroChange, ordenActual, onOrdenar, onSimularEstado }) {
    return (
        <div className={styles.panel}>
            <div className={styles.interacciones}>
                <input 
                    type="text" 
                    placeholder="Filtrar por servicio..." 
                    value={filtroActual}
                    onChange={onFiltroChange}
                    className={styles.inputFiltro}
                />
                <button onClick={onOrdenar} className={styles.btnOrdenar}>
                    Ordenar por precio: {ordenActual === 'asc' ? 'Menor a Mayor' : 'Mayor a Menor'}
                </button>
            </div>

            <div className={styles.simuladores}>
                <span className={styles.labelSimulacion}>Simular Estados del TP:</span>
                <button onClick={() => onSimularEstado('cargando')}>Cargando</button>
                <button onClick={() => onSimularEstado('error')}>Error</button>
                <button onClick={() => onSimularEstado('vacio')}>Vacío</button>
                <button onClick={() => onSimularEstado('datos')}>Con Datos</button>
            </div>
        </div>
    );
}