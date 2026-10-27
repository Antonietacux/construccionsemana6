import React from 'react';
import ActividadItem from './components/ActividadItem';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';

function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Segoe UI' }}>
            {/* Opcional: si deseas incluir tus otros componentes */}
            <HeaderClase tituloTema="Estudiando MOTION" horario="07:00 - 9:20 AM" />
            
            <div style={{ margin: '15px 0' }}>
                <ObjetivosCard objetivo="Comprender el flujo de trabajo de componentes y animaciones con Framer Motion." />
            </div>

            <h2 style={{ color: '#0f4c81', marginTop: '20px' }}>Secuencia Didáctica - Plan de Clase</h2>

            {/* Reutilizamos el componente pasando las props correctas */}
            <ActividadItem titulo="Trivia Rápida Interactiva" tiempo="5 minutos" tipo="Diagnóstica" />
            <ActividadItem titulo="Taller Guiado de Componentes" tiempo="25 minutos" tipo="Construcción" />
            <ActividadItem titulo="Pruebas de Estado con useState" tiempo="25 minutos" tipo="Aplicación" />
        </div>
    );
}

export default App;