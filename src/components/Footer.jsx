import './Footer.css';

const estudiantesPorCarrera = [
  {
    carrera: 'Arquitectura',
    nombres: ['Ana López', 'Iris Díaz', 'Karen Espitia', 'Natalia Acuña']
  },
  { carrera: 'Diseño Gráfico', nombres: ['Juliana Jiménez'] },
  { carrera: 'Marketing', nombres: ['Dayan Pinilla'] },
  { carrera: 'Ingeniería Civil', nombres: ['Gabriela Guerrero'] },
  { carrera: 'Ingeniería de Sistemas', nombres: ['Julián Nova'] }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-mark">L'arte si sente</span>
          <span className="footer__brand-sub">
            Centro Cultural y Gastronómico de La Candelaria
          </span>
          <p className="footer__pregunta">
            «¿Cómo puede un proyecto de revitalización urbana en el lote de la
            Calle 12 #9-48 de La Candelaria, mediante un programa de usos mixtos
            inspirado en el modelo del barrio romano Trastevere y un sistema de
            gestión técnica de bajo costo, activar la memoria colectiva del
            barrio, mejorar la calidad del espacio público y garantizar la
            operación autosostenible del equipamiento?»
          </p>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Universidad</h4>
            <p>
              Universidad Piloto de Colombia<br />
              Facultad <span className="footer__pending">[OJOOOOO FACULTADES]</span><br />
              Programas <span className="footer__pending">Arquitectura, Diseño Gráfico, Marketing, Ingeniería Civil, Ingeniería de Sistemas</span>
            </p>
          </div>
          <div>
            <h4>Estudiantes</h4>
            <ul className="footer__estudiantes">
              {estudiantesPorCarrera.map((g) => (
                <li key={g.carrera}>
                  <span className="footer__est-carrera">{g.carrera}</span>
                  <span className="footer__est-nombres">
                    {g.nombres.join(', ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__base">
        <div className="container footer__base-inner">
          <span>© 2026 · Universidad Piloto de Colombia</span>
          <span>
            Proyecto académico · Taller Internacional Italia en Perspectiva
          </span>
        </div>
      </div>
    </footer>
  );
}
