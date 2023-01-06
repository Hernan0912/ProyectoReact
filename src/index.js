import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App';
import { CarritoProvider } from './Context/CarritoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
      <App/>
    </CarritoProvider>
);

//StricMonde ejecuta 2 veces, 1 de prueba y otra de ejecición original
