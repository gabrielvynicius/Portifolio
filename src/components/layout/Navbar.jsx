// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
];

const PROJETOS = [
  { href: "#/projetos/conta-de-luz", label: "Conta de Luz" },
  { href: "#outro-projeto", label: "Outro Projeto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  // refs: menu wrapper + hamburger button
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha ao clicar fora, MAS ignora cliques no hamburger
  useEffect(() => {
    function handleClickOutside(e) {
      // se menu não aberto, nada a fazer
      if (!isMobileMenuOpen && !openProjects) return;

      const target = e.target;
      const clickedInsideMenu = menuRef.current && menuRef.current.contains(target);
      const clickedHamburger = hamburgerRef.current && hamburgerRef.current.contains(target);

      // se clicou fora do menu e fora do hambúrguer, fecha tudo
      if (!clickedInsideMenu && !clickedHamburger) {
        setIsMobileMenuOpen(false);
        setOpenProjects(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, openProjects]);

  const handleLinkClick = (isProjetos = false) => (e) => {
    if (isProjetos) {
      // Só previne navegação no botão Projetos (abre/fecha submenu)
      e.preventDefault();
      setOpenProjects((v) => !v);
    } else {
      // Fecha tudo ao clicar em links comuns
      setIsMobileMenuOpen(false);
      setOpenProjects(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoText}>Portfolio</span>
        </a>

        {/* Hambúrguer (tem ref pra evitar que clique nele seja considerado "fora") */}
        <button
          ref={hamburgerRef}
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          {/* você pode trocar por svg/ícone */}
          ☰
        </button>

        {/* Menu wrapper — contém menu e dropdown; tem ref */}
        <div
          ref={menuRef}
          className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
        >
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link} onClick={handleLinkClick()}>
              {label}
            </a>
          ))}

          {/* Dropdown Projetos */}
          <div className={styles.dropdownWrapper}>
            <a
              href="#projetos"
              className={styles.link}
              onClick={handleLinkClick(true)}
              aria-haspopup="true"
              aria-expanded={openProjects}
            >
              Projetos <span className={styles.caret}>{openProjects ? "▴" : "▾"}</span>
            </a>

            {openProjects && (
              <div className={styles.projectsDropdown} role="menu" aria-label="Projetos">
                {PROJETOS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={styles.dropdownItem}
                    onClick={handleLinkClick()}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#contato" className={styles.link} onClick={handleLinkClick()}>
            Contato
          </a>
        </div>
      </Container>
    </nav>
  );
}
