// src/sections/Projects.jsx
import Section from '../components/layout/Section';
import Tag from '../components/ui/Tag';
import Icon from '../components/ui/Icon';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projetos"
      title="Projetos"
      description="Alguns trabalhos e estudos que demonstram meu foco em front‑end."
    >
      <div style={{ display: 'grid', gap: 16 }}>
        {projects.map((p) => (
          <article key={p.title}
                   style={{ border: '1px solid var(--border)', borderRadius: 12, padding: 16, background: 'var(--bg-elev)' }}>
            <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <div style={{ display: 'flex', gap: 10 }}>
                {p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer" title="Demo ao vivo">
                    <Icon name="external" />
                  </a>
                )}
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer" title="Repositório no GitHub">
                    <Icon name="github" />
                  </a>
                )}
              </div>
            </header>
            <p className="muted" style={{ marginTop: 0 }}>{p.description}</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

