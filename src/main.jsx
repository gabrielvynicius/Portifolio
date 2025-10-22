// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa a Navbar e os estilos globais
import Navbar from './components/layout/Navbar.jsx';
import './styles/globals.css';

// Garante que existe <div id="root"></div> em index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar />
      <main>
        {/* Conteúdo temporário para validar renderização */}
        <h1 style={{ color: 'white', textAlign: 'center', marginTop: '48px' }}>
          Portfólio em construção 🚀
        </h1>
      </main>
    </>
  </React.StrictMode>
);