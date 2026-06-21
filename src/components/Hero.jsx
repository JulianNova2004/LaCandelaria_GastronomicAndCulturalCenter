import './Hero.css';

// Para mostrar el render del predio en el Hero, pega aquí la ruta de la imagen.
// Por ejemplo: HERO_IMAGE = '/assets/render-hero.jpg'
// La imagen ocupará todo el fondo del Hero (full-bleed, object-fit cover).
const HERO_IMAGE = '';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        {HERO_IMAGE ? (
          <img className="hero__bg-image" src={HERO_IMAGE} alt="" />
        ) : (
          <>
            <div className="hero__bg-art" />
            <div className="hero__render-frame">
              <span className="hero__render-frame-tag">
                Espacio reservado para render del predio
              </span>
              <span className="hero__render-frame-spec">
                Full-bleed · object-fit: cover · proporción libre
              </span>
            </div>
          </>
        )}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__eyebrow reveal">
          <span className="hero__eyebrow-line" />
          <span>Taller Internacional Italia en Perspectiva 2026 · Mesa 1</span>
        </div>

        <h1 className="hero__title reveal">
          <span className="hero__title-italic">L'arte si sente</span>
          <span className="hero__title-main">
            Centro Cultural y Gastronómico de La Candelaria
          </span>
        </h1>

        <p className="hero__lead reveal">
          Una intervención de revitalización urbana en Calle 12 #9-48, que
          invierte la lección de Trastevere para que el patrimonio siga siendo
          habitado por sus ciudadanos, y no únicamente por sus visitantes.
        </p>

        <div className="hero__meta reveal">
          <div className="hero__meta-item">
            <span className="eyebrow">Ubicación</span>
            <span>La Candelaria · Bogotá D.C.</span>
          </div>
          <div className="hero__meta-item">
            <span className="eyebrow">Lote</span>
            <span>810 m² · Nivel N4 (Res. 440/2021)</span>
          </div>
          <div className="hero__meta-item">
            <span className="eyebrow">Universidad</span>
            <span>Piloto de Colombia · 2026</span>
          </div>
        </div>

        <a href="#lugar" className="hero__scroll" aria-label="Bajar a contenido">
          <span>Recorrer el proyecto</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
            <path d="M7 1v18m0 0l6-6m-6 6l-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
