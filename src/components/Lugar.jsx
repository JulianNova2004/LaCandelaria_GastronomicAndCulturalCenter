import './Lugar.css';

// IMAGEN 2 · FOTO DEL PREDIO (1500 × 1000)
const PREDIO_IMAGE = '/LoteActual.jpeg';

// IMAGEN 3 · CONTEXTO URBANO (1961 × 930) — collage panorámico
const CONTEXTO_IMAGE = '/CollageEntorno.png';

const facts = [
  { k: 'Dirección', v: 'Calle 12 #9-48 · La Candelaria (Localidad 17), Bogotá D.C.' },
  { k: 'Coordenadas', v: '4°36′02″ N · 74°04′37″ O' },
  { k: 'Área del lote', v: '810 m²' },
  { k: 'Uso anterior', v: 'Pasaje comercial activo hasta 2020' },
  { k: 'Clasificación', v: 'Nivel de Intervención 4 (N4)' },
  { k: 'Autoridad', v: 'Resolución 440 de 2021 · IDPC' },
  { k: 'Estacionamientos', v: 'Exentos por condición BIC' },
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
            {PREDIO_IMAGE ? (
              <figure className="framed-image lugar__photo">
                <img
                  src={PREDIO_IMAGE}
                  alt="Estado actual del predio en Calle 12 #9-48"
                  loading="lazy"
                />
                <figcaption className="lugar__photo-caption">
                  Calle 12 #9-48 · estado actual post-pandemia
                </figcaption>
              </figure>
            ) : (
              <div className="placeholder lugar__photo">
                <span className="placeholder__label">[FOTO PREDIO ACTUAL]</span>
                <span className="placeholder__hint">
                  Fachada Calle 12 #9-48 · estado actual post-pandemia
                </span>
              </div>
            )}
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

        <div className="lugar__entorno reveal">
          {CONTEXTO_IMAGE ? (
            <figure className="framed-image lugar__collage">
              <img
                src={CONTEXTO_IMAGE}
                alt="Collage panorámico del contexto urbano de La Candelaria"
                loading="lazy"
              />
            </figure>
          ) : (
            <div className="placeholder lugar__collage">
              <span className="placeholder__label">[COLLAGE ENTORNO URBANO]</span>
              <span className="placeholder__hint">
                Montaje panorámico de los equipamientos colindantes
              </span>
            </div>
          )}
          <aside className="lugar__entorno-aside">
            <h3 className="lugar__entorno-label">El entorno inmediato</h3>
            <p className="lugar__entorno-text">
              El predio se inscribe en el polígono con mayor densidad de
              equipamientos culturales y patrimoniales de Bogotá. Conviven en
              menos de siete cuadras a la redonda con la vida popular del barrio.
            </p>
            <div className="lugar__entorno-list-wrap">
              <span className="lugar__entorno-list-label">Equipamientos cercanos</span>
              <ul className="lugar__entorno-list">
                <li><span className="lugar__entorno-list-pin" aria-hidden="true" />Plaza de Bolívar</li>
                <li><span className="lugar__entorno-list-pin" aria-hidden="true" />Teatro Colón</li>
                <li><span className="lugar__entorno-list-pin" aria-hidden="true" />Museo del Oro</li>
                <li><span className="lugar__entorno-list-pin" aria-hidden="true" />Biblioteca Luis Ángel Arango</li>
                <li><span className="lugar__entorno-list-pin" aria-hidden="true" />Centro Cultural Gabriel García Márquez</li>
              </ul>
            </div>
          </aside>
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
