import './Timeline.css';

const hitos = [
  {
    fase: 'Fase 01',
    titulo: 'Diagnóstico del lugar',
    detalle:
      'Lectura del predio en Calle 12 #9-48 y su contexto patrimonial: La Candelaria post-pandemia, deterioro físico y social, lote en abandono que coexiste con vida popular auténtica.'
  },
  {
    fase: 'Fase 02',
    titulo: 'Análisis del referente',
    detalle:
      'Estudio de Trastevere (Roma) y del Museo di Roma in Trastevere. Identificación de la lección a invertir: evitar reproducir la pérdida de vida popular por gentrificación turística.'
  },
  {
    fase: 'Fase 03',
    titulo: 'Definición de la propuesta',
    detalle:
      'Programa mixto de tres pisos articulado por un patio central acristalado. Galería de arte urbano, feria comercial para emprendedores y gastronomía local bogotana.'
  },
  {
    fase: 'Fase 04',
    titulo: 'Desarrollo técnico',
    detalle:
      'Prototipo de un sistema de monitoreo y control ambiental con Raspberry Pi Pico y MicroPython, como alternativa de bajo costo a un BMS comercial.'
  },
  {
    fase: 'Fase 05',
    titulo: 'First Briefing',
    detalle:
      'Consolidación del entregable académico actual. Documento integrado de Mesa 1 (Patrimonio Renacentista y Conservación), listo para revisión posterior a la visita al referente italiano.'
  }
];

export default function Timeline() {
  return (
    <section id="proceso" className="section timeline">
      <div className="container">
        <header className="reveal timeline__header">
          <span className="section__label">04 · Proceso</span>
          <h2 className="section__title">
            Cinco fases del trabajo académico
          </h2>
          <p className="section__lead">
            La ruta conceptual del proyecto, del diagnóstico al <em>First Briefing</em>.
            Cada fase aporta una capa específica al documento integrado entregado por
            la Mesa 1.
          </p>
        </header>

        <ol className="timeline__list">
          {hitos.map((h, i) => (
            <li
              key={h.fase}
              className={`timeline__item ${i % 2 === 0 ? 'is-left' : 'is-right'} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="timeline__card">
                <span className="timeline__fase">{h.fase}</span>
                <h3>{h.titulo}</h3>
                <p>{h.detalle}</p>
              </div>
              <span className="timeline__dot" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
