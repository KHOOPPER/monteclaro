import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Quiénes somos', to: 'quienes' },
  { label: 'Misión y Visión', to: 'mision' },
  { label: 'Galería', to: 'galeria' },
  { label: 'Proceso', to: 'proceso' },
  { label: 'Contacto', to: 'contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="text-xl font-bold">MonteClaro</span>

        {/* Botón hamburguesa (móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}
                activeClass="text-orange-400"
                className="cursor-pointer hover:text-orange-400 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile-menu"
            className="md:hidden flex flex-col bg-black text-white px-6 py-4 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setOpen(false)}
                  className="block w-full py-2 hover:text-orange-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
