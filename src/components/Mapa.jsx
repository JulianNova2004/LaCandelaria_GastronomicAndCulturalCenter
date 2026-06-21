import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';

// ╔════════════════════════════════════════════════════════════════╗
// ║  POLÍGONO DE LA CANDELARIA                                     ║
// ║  Coloca el archivo en /public/la-candelaria.json               ║
// ║  Soporta formato Esri (geometry.rings) o GeoJSON estándar      ║
// ║  (geometry.coordinates / FeatureCollection / Polygon).         ║
// ║  Si el archivo no existe o falla, usa el polígono aproximado.  ║
// ╚════════════════════════════════════════════════════════════════╝
const GEOJSON_URL = '/la-candelaria.json';

const PREDIO = [4.60056, -74.07694];

// Polígono de respaldo (aproximación) usado solo si no se carga el archivo.
const FALLBACK_POLYGON = [
  [4.60710, -74.07720], [4.60680, -74.07360], [4.60630, -74.07090],
  [4.60540, -74.06830], [4.60480, -74.06650], [4.60310, -74.06520],
  [4.60080, -74.06520], [4.59850, -74.06650], [4.59640, -74.06880],
  [4.59500, -74.07100], [4.59440, -74.07400], [4.59470, -74.07720],
  [4.59600, -74.07900], [4.59950, -74.07920], [4.60280, -74.07880],
  [4.60540, -74.07820], [4.60710, -74.07720]
];

const cercanos = [
  { nombre: 'Plaza de Bolívar', dist: '180 m', coords: [4.59810, -74.07590], tipo: 'Espacio público' },
  { nombre: 'Teatro Colón', dist: '300 m', coords: [4.59717, -74.07424], tipo: 'Teatro patrimonial' },
  { nombre: 'Museo del Oro', dist: '650 m', coords: [4.60175, -74.07213], tipo: 'Museo' },
  { nombre: 'Biblioteca Luis Ángel Arango', dist: '450 m', coords: [4.59644, -74.07258], tipo: 'Biblioteca' },
  { nombre: 'Centro Cultural Gabriel García Márquez', dist: '550 m', coords: [4.59628, -74.07378], tipo: 'Centro cultural' },
  { nombre: 'Transmilenio Carrera 10', dist: '400 m', coords: [4.60195, -74.07410], tipo: 'Transporte' }
];

// Parser tolerante: acepta Esri (rings) o GeoJSON (coordinates / features).
// Devuelve un array de [lat, lng] o null.
function parseBoundary(data) {
  if (!data) return null;

  // Esri Feature: { geometry: { rings: [[[lng, lat], ...]] } }
  const rings = data?.geometry?.rings;
  if (Array.isArray(rings) && Array.isArray(rings[0])) {
    return rings[0]
      .filter((p) => Array.isArray(p) && p.length >= 2)
      .map(([lng, lat]) => [lat, lng]);
  }

  // GeoJSON FeatureCollection
  const feature = data?.features?.[0] ?? data;
  const geom = feature?.geometry ?? feature;
  const coords = geom?.coordinates;
  if (!coords) return null;

  // Polygon: coordinates = [[[lng, lat], ...]]
  if (geom?.type === 'Polygon' || (Array.isArray(coords[0]?.[0]) && typeof coords[0][0][0] === 'number')) {
    return coords[0]
      .filter((p) => Array.isArray(p) && p.length >= 2)
      .map(([lng, lat]) => [lat, lng]);
  }

  // MultiPolygon: coordinates = [[[[lng, lat], ...]]]
  if (geom?.type === 'MultiPolygon' && Array.isArray(coords[0]?.[0]?.[0])) {
    return coords[0][0]
      .filter((p) => Array.isArray(p) && p.length >= 2)
      .map(([lng, lat]) => [lat, lng]);
  }

  return null;
}

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

    const polygonStyle = {
      color: '#8B1E3A',
      weight: 3,
      opacity: 0.95,
      fillColor: '#8B1E3A',
      fillOpacity: 0.14,
      dashArray: '6 4'
    };

    let boundary = L.polygon(FALLBACK_POLYGON, polygonStyle).addTo(map);
    boundary.bindTooltip('Localidad 17 · La Candelaria (límite referencial)', {
      sticky: true,
      direction: 'top',
      className: 'mapa__tooltip'
    });

    fetch(GEOJSON_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const ring = parseBoundary(data);
        if (!ring || ring.length < 3) return;
        map.removeLayer(boundary);
        boundary = L.polygon(ring, polygonStyle).addTo(map);
        boundary.bindTooltip('Localidad 17 · La Candelaria', {
          sticky: true,
          direction: 'top',
          className: 'mapa__tooltip'
        });
        map.fitBounds(boundary.getBounds(), { padding: [20, 20], maxZoom: 16 });
      })
      .catch(() => {});

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
            Pasa el cursor sobre los pines para identificar cada referente.
          </p>
        </header>

        <div className="mapa__embed framed-image reveal">
          <div
            ref={containerRef}
            className="mapa__canvas"
            role="application"
            aria-label="Mapa interactivo de La Candelaria con el predio y referentes urbanos cercanos"
          />
        </div>

        <div className="mapa__leyenda reveal">
          <span className="mapa__leyenda-item">
            <span className="mapa__leyenda-swatch mapa__leyenda-swatch--polygon" />
            Límite de La Candelaria
          </span>
          <span className="mapa__leyenda-item">
            <span className="mapa__leyenda-swatch mapa__leyenda-swatch--predio" />
            Predio del proyecto
          </span>
          <span className="mapa__leyenda-item">
            <span className="mapa__leyenda-swatch mapa__leyenda-swatch--ref" />
            Referentes urbanos cercanos
          </span>
        </div>
      </div>
    </section>
  );
}
