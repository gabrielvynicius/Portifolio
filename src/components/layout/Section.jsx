// src/components/layout/Section.jsx
import Container from './Container';
import styles from './Section.module.css';

export default function Section({ id, title, description, children }) {
  return (
    <section id={id} className={styles.section}>
      <Container>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.content}>{children}</div>
      </Container>
    </section>
  );
}
``

