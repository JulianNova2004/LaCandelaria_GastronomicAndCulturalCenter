import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';

const PREDIO = [4.60056, -74.07694];

// Polígono referencial de La Candelaria (Localidad 17, UPZ 94).
// Trazado siguiendo Av. Jiménez al norte, Cerros Orientales al oriente,
// Calle 6 al sur y Carrera 10 al occidente. Aproximación cartográfica.
const LA_CANDELARIA = [
  [4.60710, -74.07720],
  [4.60680, -74.07360],
  [4.60630, -74.07090],
  [4.60540, -74.06830],
  [4.60480, -74.06650],
  [4.60310, -74.06520],
  [4.60080, -74.06520],
  [4.59850, -74.06650],
  [4.59640, -74.06880],
  [4.59500, -74.07100],
  [4.59440, -74.07400],
  [4.59470, -74.07720],
  [4.59600, -74.07900],
  [4.59950, -74.07920],
  [4.60280, -74.07880],
  [4.60540, -74.07820],
  [4.60710, -74.07720]
];

const cercanos = [
  {
    nombre: 'Plaza de Bolívar',
    dist: '180 m',
    coords: [4.59810, -74.07590],
    tipo: 'Espacio público'
  },
  {
    nombre: 'Teatro Colón',
    dist: '300 m',
    coords: [4.59717, -74.07424],
    tipo: 'Teatro patrimonial'
  },
  {
    nombre: 'Museo del Oro',
    dist: '650 m',
    coords: [4.60175, -74.07213],
    tipo: 'Museo'
  },
  {
    nombre: 'Biblioteca Luis Ángel Arango',
    dist: '450 m',
    coords: [4.59644, -74.07258],
    tipo: 'Biblioteca'
  },
  {
    nombre: 'Centro Cultural Gabriel García Márquez',
    dist: '550 m',
    coords: [4.59628, -74.07378],
    tipo: 'Centro cultural'
  },
  {
    nombre: 'Transmilenio Carrera 10',
    dist: '400 m',
    coords: [4.60195, -74.07410],
    tipo: 'Transporte'
  }
];

export default function Mapa() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: PREDIO,
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const boundary = L.polygon(LA_CANDELARIA, {
      color: '#B0BA99',
      weight: 2.5,
      opacity: 0.95,
      fillColor: '#B0BA99',
      fillOpacity: 0.18,
      dashArray: '6 4'
    }).addTo(map);
    boundary.bindTooltip('Localidad 17 · La Candelaria (límite referencial)', {
      sticky: true,
      direction: 'top',
      className: 'mapa__tooltip'
    });

    const predioIcon = L.divIcon({
      className: 'mapa__marker mapa__marker--predio',
      html: '<span class="mapa__marker-dot"></span><span class="mapa__marker-label">Calle 12 #9-48</span>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    L.marker(PREDIO, { icon: predioIcon, zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(
        '<strong>Predio del proyecto</strong><br/>Calle 12 #9-48<br/>Lote 810 m² · N4'
      );

    cercanos.forEach((c) => {
      const refIcon = L.divIcon({
        className: 'mapa__marker mapa__marker--ref',
        html: `<span class="mapa__refpin"></span><span class="mapa__reflabel">${c.nombre}</span>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });
      L.marker(c.coords, { icon: refIcon })
        .addTo(map)
        .bindPopup(
          `<strong>${c.nombre}</strong><br/><em>${c.tipo}</em><br/>${c.dist} del predio`
        );
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id="ubicacion" className="section section--alt mapa">
      <div className="container">
        <header className="reveal">
          <span className="section__label">05 · Ubicación</span>
          <h2 className="section__title">
            Calle 12 #9-48: corazón de La Candelaria
          </h2>
          <p className="section__lead">
            El predio se inscribe en el polígono más denso de equipamientos
            culturales y patrimoniales de Bogotá, con acceso peatonal directo a
            Plaza de Bolívar y conexión inmediata a Transmilenio Carrera 10.
          </p>
        </header>

        <div className="mapa__grid">
          <div className="mapa__embed framed-image reveal">
            <div
              ref={containerRef}
              className="mapa__canvas"
              role="application"
              aria-label="Mapa interactivo de La Candelaria con el predio y referentes urbanos cercanos"
            />
          </div>

          <aside className="mapa__aside reveal">
            <h3>Referentes urbanos cercanos</h3>
            <ul className="mapa__lista">
              {cercanos.map((c) => (
                <li key={c.nombre}>
                  <span className="mapa__lista-pin" aria-hidden="true" />
                  <span className="mapa__lista-nombre">{c.nombre}</span>
                  <span className="mapa__dist">{c.dist}</span>
                </li>
              ))}
            </ul>
            <div className="mapa__leyenda">
              <span className="mapa__leyenda-item">
                <span className="mapa__leyenda-swatch mapa__leyenda-swatch--polygon" />
                Límite referencial de La Candelaria
              </span>
              <span className="mapa__leyenda-item">
                <span className="mapa__leyenda-swatch mapa__leyenda-swatch--predio" />
                Predio del proyecto
              </span>
              <span className="mapa__leyenda-item">
                <span className="mapa__leyenda-swatch mapa__leyenda-swatch--ref" />
                Referentes urbanos
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
