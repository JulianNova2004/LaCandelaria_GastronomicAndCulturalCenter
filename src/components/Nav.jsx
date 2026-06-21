import { useEffect, useState } from 'react';
import './Nav.css';

const links = [
  { href: '#lugar', label: 'El lugar' },
  { href: '#referente', label: 'El referente' },
  { href: '#propuesta', label: 'La propuesta' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#equipo', label: 'Equipo' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" aria-label="Inicio">
          <span className="nav__brand-mark">L'</span>
          <span className="nav__brand-text">
            <span className="nav__brand-title">arte si sente</span>
            <span className="nav__brand-sub">La Candelaria · 2026</span>
          </span>
        </a>
        <button
          className="nav__toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
