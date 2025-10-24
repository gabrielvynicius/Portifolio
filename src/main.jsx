import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/layout/Navbar.jsx';
import './styles/globals.css';

import ContaDeLuz from './containers/projetos/conta-de-luz';
import About from "./sections/About.jsx";
import Habilidades from './sections/Skills.jsx';
import Experiencia from './sections/Experience.jsx';
import Contato from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
function CurrentPage() {
  const getRoute = () => window.location.hash.replace(/^#/, '') || '/';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === '/projetos/conta-de-luz') {
    return <ContaDeLuz />;
  }

  return (
    <>
      <About />
      <Habilidades />
      <Experiencia />
      <Contato />
    </>
  );
}

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
