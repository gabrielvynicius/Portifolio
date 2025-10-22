import { useState, useEffect } from 'react';
import Container from './Container';
import styles from './Navbar.module.css';
// Se quiser usar ícones depois, descomente a linha abaixo e adicione dentro das âncoras
// import Icon from '../ui/Icon';

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // estado correto ao carregar
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo} aria-label="Ir para o início">    
          <span className={styles.logoText}>Gabriel Vynicius</span>
        </a>

        <nav className={styles.menu} aria-label="Navegação principal">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link}>
              {label}
            </a>
          ))}

        </nav>
      </Container>
    </header>
  );
}