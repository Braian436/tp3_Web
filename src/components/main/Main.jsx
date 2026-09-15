import React, { useState } from 'react';
import PanelControles from '../panelControles/PanelControles';
import ListaTurnos from '../listaTurnos/ListaTurnos';
import styles from './Main.module.css';

const turnosIniciales = [
  { id: 1, cliente: 'Juan Pérez', servicio: 'Corte + Barba', precio: 11000, barbero: 'Roberto', notas: 'Cliente habitual' },
  { id: 2, cliente: 'María López', servicio: 'Color', precio: 25000, barbero: 'Celeste', notas: 'Alergia a tintes fuertes' },
  { id: 3, cliente: 'Juan Pérez', servicio: 'Lavado', precio: 0, barbero: 'Roberto', notas: 'Promoción por 5to corte' }, 
  { id: 4, cliente: 'Carlos Gómez', servicio: 'Corte de cabello', precio: 8000, barbero: null, notas: 'Atiende el primer barbero disponible' },
  { id: 5, cliente: 'Ana Torres', servicio: 'Diseño de Cejas', precio: 3000, barbero: 'Celeste', notas: 'Primera vez' },
  { id: 6, cliente: 'Luis Silva', servicio: 'Corte con diseño', precio: 15000, barbero: 'Roberto', notas: 'Diseño en V' }
];

export default function Main() {
  const [estadoPantalla, setEstadoPantalla] = useState('datos'); 
  const [filtroServicio, setFiltroServicio] = useState('');
  const [orden, setOrden] = useState('asc'); 

  const turnosFiltradosYOrdenados = [...turnosIniciales]
    .filter(turno => turno.servicio.toLowerCase().includes(filtroServicio.toLowerCase()))
    .sort((a, b) => orden === 'asc' ? a.precio - b.precio : b.precio - a.precio);

  return (
    <main className={styles.mainContent}>
      <div className={styles.headerTitle}>
        <h1>Gestión de Turnos Diarios</h1>
      </div>
      
      <PanelControles 
        filtroActual={filtroServicio}
        onFiltroChange={(e) => setFiltroServicio(e.target.value)}
        ordenActual={orden}
        onOrdenar={() => setOrden(orden === 'asc' ? 'desc' : 'asc')}
        onSimularEstado={(nuevoEstado) => setEstadoPantalla(nuevoEstado)}
      />

      <ListaTurnos 
        estadoPantalla={estadoPantalla}
        turnos={turnosFiltradosYOrdenados}
        textoFiltro={filtroServicio}
      />
    </main>
  );
}