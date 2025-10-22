// src/components/layout/Footer.jsx
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>© {year} Gabriel Vynicius Rocha Lima</p>
        <p className="muted">Feito com React & CSS Modules</p>
      </Container>
    </footer>
  );
}

