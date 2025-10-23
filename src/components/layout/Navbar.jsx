// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import Container from './Container';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' }, // ← este vira o gatilho do dropdown
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (openProjects && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenProjects(false);
      }
    }

    const handleHashChange = () => setOpenProjects(false);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [openProjects]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoText}>Gabriel Vynicius</span>
        </a>

        {/* Menu principal */}
        <nav className={styles.menu} aria-label="Navegação principal" ref={menuRef}>
          {LINKS.map(({ href, label }) => {
            const isProjetos = href === '#projetos';
            return (
              <a
                key={href}
                href={href}
                className={`${styles.link} ${isProjetos && openProjects ? styles.active : ''}`}
                onClick={
                  isProjetos
                    ? (e) => {
                        e.preventDefault();
                        setOpenProjects((v) => !v);
                      }
                    : undefined
                }
                aria-haspopup={isProjetos ? 'true' : undefined}
                aria-expanded={isProjetos ? openProjects : undefined}
              >
                {label}
                {isProjetos && <span className={styles.caret}>▾</span>}
              </a>
            );
          })}

          {/* Dropdown de Projetos */}
          {openProjects && (
            <div className={styles.projectsDropdown} role="menu" aria-label="Projetos">
              <a href="#/projetos/conta-de-luz" className={styles.dropdownItem}>
                Conta de Luz
              </a>
              {/* Exemplo para adicionar mais itens:
              <a href="#/projetos/outro-projeto" className={styles.dropdownItem}>
                Outro Projeto
              </a> */}
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
