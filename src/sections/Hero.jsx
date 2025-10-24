// src/sections/Hero.jsx
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Section id="inicio" className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.texts}>
          <p className={styles.greet}>Olá, eu sou</p>
          <h1 className={styles.title}>Gabriel Vynicius</h1>
          <h2 className={styles.subtitle}>Desenvolvedor Front‑end focado em React</h2>
          <p className={styles.lead}>
            Eu crio interfaces rápidas, acessíveis e responsivas.  
            Vamos construir algo incrível?
          </p>
          <div className={styles.ctas}>
            <a href="#projetos" className={styles.primaryCta}>Projetos</a>
            <a href="#contato" className={styles.secondaryCta}>Contato</a>
          </div>
          <div className={styles.visual}>
            <div className={styles.avatar} aria-hidden="true" />
          </div>
        </div>
      </Container>
    </Section>
  );
}


