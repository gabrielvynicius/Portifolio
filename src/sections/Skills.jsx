// src/sections/Skills.jsx
import Section from '../components/layout/Section';
import Tag from '../components/ui/Tag';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      description="Principais tecnologias e ferramentas com as quais trabalho."
    >
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {skills.map((s) => (<Tag key={s}>{s}</Tag>))}
      </div>
    </Section>
  );
}


