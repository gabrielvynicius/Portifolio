// src/components/ui/Tag.jsx
import styles from './Tag.module.css';

export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

