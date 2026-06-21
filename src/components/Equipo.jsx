import './Equipo.css';

const grupos = [
  {
    carrera: 'Arquitectura',
    integrantes: ['Ana López', 'Iris Díaz', 'Karen Espitia', 'Natalia Acuña']
  },
  {
    carrera: 'Diseño Gráfico',
    integrantes: ['Juliana Jiménez']
  },
  {
    carrera: 'Marketing',
    integrantes: ['Dayan Pinilla']
  },
  {
    carrera: 'Ingeniería Civil',
    integrantes: ['Gabriela Guerrero']
  },
  {
    carrera: 'Ingeniería de Sistemas',
    integrantes: ['Julián Nova']
  }
];

export default function Equipo() {
  return (
    <section id="equipo" className="section equipo">
      <div className="container">
        <header className="reveal">
          <span className="section__label">06 · Equipo</span>
          <h2 className="section__title">
            Un equipo interdisciplinar de la Universidad Piloto
          </h2>
          <p className="section__lead">
            Estudiantes de cinco disciplinas. Cada una aporta una lectura
            específica al proyecto, desde el análisis estructural hasta la
            identidad gráfica de la fachada, y todas convergen en el
            <em> First Briefing</em>.
          </p>
        </header>

        <div className="equipo__grupos">
          {grupos.map((g, gi) => (
            <article
              key={g.carrera}
              className="grupo reveal"
              style={{ transitionDelay: `${gi * 70}ms` }}
            >
              <header className="grupo__head">
                <span className="grupo__num">0{gi + 1}</span>
                <h3 className="grupo__carrera">{g.carrera}</h3>
                <span className="grupo__count">
                  {g.integrantes.length}{' '}
                  {g.integrantes.length === 1 ? 'integrante' : 'integrantes'}
                </span>
              </header>
              <ul className="grupo__lista">
                {g.integrantes.map((nombre) => (
                  <li key={nombre} className="persona">
                    <span className="persona__inicial" aria-hidden="true">
                      {nombre.charAt(0)}
                    </span>
                    <span className="persona__nombre">{nombre}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
