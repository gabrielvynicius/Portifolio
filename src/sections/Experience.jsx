// src/sections/Experience.jsx
import Section from '../components/layout/Section';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiência"
      description="Um resumo da minha trajetória profissional e responsabilidades."
    >
      <div style={{ display: 'grid', gap: 16 }}>
        {experience.map((item) => (
          <article key={item.role + item.company}
                   style={{ border: '1px solid var(--border)', borderRadius: 12, padding: 16, background: 'var(--bg-elev)' }}>
            <h3 style={{ marginTop: 0 }}>{item.role} — {item.company}</h3>
            <p className="muted" style={{ marginTop: 4 }}>{item.period}</p>
            <ul style={{ marginTop: 8 }}>
              {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

