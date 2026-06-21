import './Propuesta.css';

// IMÁGENES 5, 6 y 7 · PLANTAS DE LOS TRES PISOS                 

const PISO_01_IMAGE = 'AxonometriaPrimerPiso.png'; 
const PISO_02_IMAGE = 'AxonometriaSegundoPiso.png'; 
const PISO_03_IMAGE = 'AxonometriaTercerPiso.png'; 

const pisos = [
  {
    n: '01',
    titulo: 'Galería de arte urbano',
    horario: 'Activación diurna',
    descripcion:
      'Espejo de agua central acristalado por seguridad, con abertura que conecta con el patio interior. Alrededor del vacío se distribuye un pasillo de exposiciones de arte urbano que activa la fachada y genera flujo peatonal constante durante el horario diurno.',
    chips: ['Espejo de agua', 'Pasillo expositivo', 'Activa fachada'],
    imagen: PISO_01_IMAGE
  },
  {
    n: '02',
    titulo: 'Feria comercial',
    horario: 'Emprendedores del barrio',
    descripcion:
      'Espacio de doble altura con vacío central destinado a una feria comercial orientada a emprendedores y pequeños empresarios. Funciona como punto de emprendimiento para la comunidad (artistas emergentes, moda sostenible), generando ingresos propios para el equipamiento.',
    chips: ['Pequeños empresarios', 'Moda sostenible', 'Artistas emergentes'],
    imagen: PISO_02_IMAGE
  },
  {
    n: '03',
    titulo: 'Gastronomía local',
    horario: 'Activación nocturna',
    descripcion:
      'Nivel con vacío central y cocina lateral que contempla una oferta de gastronomía local bogotana. El componente genera una fuente considerable de ingresos y aporta a la activación en horarios nocturnos, cuando la inseguridad percibida del barrio aumenta.',
    chips: ['Doble altura', 'Cocina perimetral', 'Terraza interior'],
    imagen: PISO_03_IMAGE
  }
];

const principios = [
  {
    titulo: 'Patio central acristalado',
    detalle:
      'Conecta verticalmente los tres niveles. Aporta ventilación, paisaje de jardín interno e iluminación natural. Dialoga con los patios coloniales bogotanos y con la tradición de patios de la arquitectura italiana.'
  },
  {
    titulo: 'Programa mixto autosostenible',
    detalle:
      'La feria comercial y la gastronomía generan ingresos propios para el equipamiento, sin depender exclusivamente de financiación pública o de un único uso cultural.'
  },
  {
    titulo: 'Gestión técnica de bajo costo',
    detalle:
      'Un BMS embebido (Raspberry Pi Pico con MicroPython) demuestra a escala reducida la viabilidad de monitoreo ambiental y control de iluminación, sin costos de un sistema comercial.'
  }
];

export default function Propuesta() {
  return (
    <section id="propuesta" className="section section--alt propuesta">
      <div className="container">
        <header className="reveal">
          <span className="section__label">03 · La propuesta</span>
          <h2 className="section__title">
            Tres niveles, un vacío vertical, una lógica de permanencia
          </h2>
          <p className="section__lead">
            Un programa mixto de usos articulado por un patio central acristalado
            que es, al mismo tiempo, pieza arquitectónica y dispositivo
            conceptual, y que ordena la experiencia mientras filtra la luz natural
            sobre los tres niveles.
          </p>
        </header>

        <div className="propuesta__pisos">
          {pisos.map((p, i) => (
            <article
              key={p.n}
              className="piso reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="piso__num">
                <span className="piso__num-prefix">Nivel</span>
                <span className="piso__num-value">{p.n}</span>
              </div>
              <div className="piso__body">
                <div className="piso__head">
                  <h3>{p.titulo}</h3>
                  <span className="piso__horario">{p.horario}</span>
                </div>
                <p>{p.descripcion}</p>
                <ul className="piso__chips">
                  {p.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              {p.imagen ? (
                <figure className="framed-image piso__visual">
                  <img
                    src={p.imagen}
                    alt={`Planta arquitectónica del piso ${p.n}`}
                    loading="lazy"
                  />
                </figure>
              ) : (
                <div className="piso__visual placeholder">
                  <span className="placeholder__label">[PLANTA PISO {p.n}]</span>
                  <span className="placeholder__hint">
                    Plano arquitectónico o axonometría
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="propuesta__principios">
          <h3 className="propuesta__principios-title reveal">
            Decisiones que articulan el proyecto
          </h3>
          <div className="propuesta__principios-grid">
            {principios.map((pr, i) => (
              <div
                key={pr.titulo}
                className="principio reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="principio__num">0{i + 1}</span>
                <h4>{pr.titulo}</h4>
                <p>{pr.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
