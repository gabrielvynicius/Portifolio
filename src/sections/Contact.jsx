// src/sections/Contact.jsx
import Section from '../components/layout/Section';
import Icon from '../components/ui/Icon';

export default function Contact() {
  return (
    <Section
      id="contato"
      title="Vamos conversar"
      description="Curtiu meu trabalho? Me chama e vamos tirar sua ideia do papel."
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <a href="mailto:seuemail@exemplo.com">
          <Icon name="mail" /> gabrielvynicius@outlook.com
        </a>
        <span aria-hidden="true" className="muted">•</span>
        <a href="https://github.com/gabrielvynicius">
          <Icon name="github" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/gabriel-vynicius/">
          <Icon name="linkedin" /> LinkedIn
        </a>
      </div>
    </Section>
  );
}

