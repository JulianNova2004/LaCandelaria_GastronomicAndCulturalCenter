import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Lugar from './components/Lugar.jsx';
import Referente from './components/Referente.jsx';
import Propuesta from './components/Propuesta.jsx';
import Timeline from './components/Timeline.jsx';
import Mapa from './components/Mapa.jsx';
import Equipo from './components/Equipo.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Lugar />
        <Referente />
        <Propuesta />
        <Timeline />
        <Mapa />
        <Equipo />
      </main>
      <Footer />
    </>
  );
}
