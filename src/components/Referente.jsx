import './Referente.css';

export default function Referente() {
  return (
    <section id="referente" className="section section--dark referente">
      <div className="container">
        <header className="reveal">
          <span className="section__label referente__label">02 · El referente</span>
          <h2 className="section__title referente__title">
            Trastevere, Roma: la lección invertida
          </h2>
        </header>

        <div className="referente__grid">
          <article className="referente__col reveal">
            <h3 className="referente__col-title">El caso romano</h3>
            <p>
              Los <em>trasteverini</em> se identificaron históricamente como los
              primeros romanos. «Sin embargo, debido al proceso masivo de turismo
              y la gentrificación, se ha desplazado gran parte de la población
              original, lo cual convierte el barrio principalmente en una
              escenografía para los visitantes que un hábitat para sus ciudadanos.»
            </p>
            <p className="referente__quote">
              «La rehabilitación sin política de permanencia comunitaria produce
              un patrimonio habitado por turistas, no por sus ciudadanos.»
            </p>
          </article>

          <div className="referente__divider reveal" aria-hidden="true">
            <span>vs</span>
          </div>

          <article className="referente__col reveal">
            <h3 className="referente__col-title">La Candelaria, hoy</h3>
            <p>
              «La Candelaria contiene un panorama con una tensión similar, con
              ciertas diferencias, donde, a diferencia de Trastevere, aún
              conserva una vida popular auténtica.»
            </p>
            <p>
              La pregunta no es cómo replicar Trastevere, sino cómo evitar
              reproducir su trayectoria de desplazamiento. La diferencia se juega
              en el programa, no en la fachada.
            </p>
          </article>
        </div>

        <div className="referente__inversion reveal">
          <span className="eyebrow referente__inversion-label">La inversión</span>
          <p>
            En el caso del inmueble no se adopta la lógica de reutilización
            adaptativa de Trastevere, sino <strong>la lógica de su programa</strong>:
            un equipamiento cultural mixto anclado al tejido histórico, con una
            pieza explícita (la feria comercial) que garantiza que el equipamiento
            beneficie directamente a los actores económicos del barrio.
          </p>
        </div>

        <div className="referente__museo reveal">
          <div className="placeholder referente__museo-image">
            <span className="placeholder__label">[MUSEO DI ROMA · TRASTEVERE]</span>
            <span className="placeholder__hint">
              Antiguo convento de Sant'Egidio (s. XVII), restaurado 1969-1972,
              renovado en 2000 como hub cultural
            </span>
          </div>
          <div>
            <h4>Museo di Roma in Trastevere: el precedente programático</h4>
            <p>
              Equipamiento cultural mixto anclado en el tejido histórico de
              Trastevere. El proyecto bogotano hereda esa lógica programática y la
              ajusta a la realidad de La Candelaria sumando una pieza ausente en
              el referente: la feria de emprendedores locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
