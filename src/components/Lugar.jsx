import './Lugar.css';

const facts = [
  { k: 'Dirección', v: 'Calle 12 #9-48 · La Candelaria (Localidad 17), Bogotá D.C.' },
  { k: 'Coordenadas', v: '4°36′02″ N · 74°04′37″ O' },
  { k: 'Área del lote', v: '810 m²' },
  { k: 'Clasificación', v: 'Nivel de Intervención 4 (N4)' },
  { k: 'Autoridad', v: 'Resolución 440 de 2021 · IDPC' },
  { k: 'Habilita', v: 'Demolición total y nueva edificación' }
];

const normas = [
  'POT · Decreto 555 de 2021',
  'PEMP del Centro Histórico de Bogotá · Resolución 0088 de 2021, modificada por la Resolución 0092 de 2023',
  'Resolución 440 de 2021 del IDPC',
  'Ley 388 de 1997 · Decreto 1077 de 2015 · Ley 397 de 1997 (Ley de Cultura)'
];

export default function Lugar() {
  return (
    <section id="lugar" className="section lugar">
      <div className="container">
        <header className="reveal">
          <span className="section__label">01 · El lugar</span>
          <h2 className="section__title">
            Un predio en abandono, en el corazón patrimonial de Bogotá
          </h2>
          <p className="section__lead">
            «Un antiguo pasaje comercial que estuvo altamente activo, hasta cuando
            llegó la pandemia en 2020.» Hoy, el lote no comunica nada debido a su
            falta de identidad gráfica y a un deterioro físico que coexiste con
            una vida popular auténtica que sí preserva el barrio.
          </p>
        </header>

        <div className="lugar__grid">
          <div className="lugar__visual reveal">
            <div className="placeholder lugar__photo">
              <span className="placeholder__label">[FOTO PREDIO ACTUAL]</span>
              <span className="placeholder__hint">
                Fachada Calle 12 #9-48 · estado actual post-pandemia
              </span>
            </div>
            <div className="placeholder lugar__photo lugar__photo--small">
              <span className="placeholder__label">[CONTEXTO URBANO]</span>
              <span className="placeholder__hint">
                Entorno: Plaza de Bolívar, Teatro Colón, Museo del Oro
              </span>
            </div>
          </div>

          <dl className="lugar__facts reveal">
            {facts.map((f) => (
              <div key={f.k} className="lugar__fact">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lugar__norms reveal">
          <h3>Marco normativo aplicable</h3>
          <ul>
            {normas.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="lugar__note">
            La condición de Bien de Interés Cultural exime al predio de cuotas de
            estacionamiento. La clasificación N4 constituye el factor habilitante
            más determinante del proyecto, otorgando libertad proyectual para una
            nueva edificación.
          </p>
        </div>
      </div>
    </section>
  );
}
