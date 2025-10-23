
// src/main.jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


// Importa a Navbar e os estilos globais (do jeito que você já tinha)
import Navbar from './components/layout/Navbar.jsx';
import './styles/globals.css';

// ✅ NOVO: importa a página do projeto Conta de Luz
// (garanta que existe: src/containers/projetos/conta-de-luz/index.jsx)
import ContaDeLuz from './containers/projetos/conta-de-luz';

function CurrentPage() {
  // Lê a rota do hash: "#/projetos/conta-de-luz" -> "/projetos/conta-de-luz"
  const getRoute = () => window.location.hash.replace(/^#/, '') || '/';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // 👉 Só troca para a página do projeto quando for esse hash específico
  if (route === '/projetos/conta-de-luz') {
    return <ContaDeLuz />;
  }

  // ✅ Caso contrário, mantém o conteúdo original que você já tinha
  return (
    <h1 style={{ color: 'white', textAlign: 'center', marginTop: '48px' }}>
      Portfólio em construção 🚀
    </h1>
  );
}

// Garante que existe <div id="root"></div> em index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar />
      <main>
        <CurrentPage />
      </main>
    </>
  </React.StrictMode>
);