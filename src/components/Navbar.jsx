import { motion } from 'framer-motion';

function Navbar({ scrollTo }) {
  const links = [
    { name: 'Inicio', section: 'hero' },
    { name: 'Quiénes somos', section: 'quienesSomos' },
    { name: 'Misión y Visión', section: 'misionVision' },
    { name: 'Galería', section: 'galeria' },
    { name: 'Proceso', section: 'proceso' },
    { name: 'Contacto', section: 'contacto' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-xl font-bold">MonteClaro</span>
        <ul className="flex flex-wrap gap-4 text-sm md:text-base">
          {links.map((link) => (
            <li
              key={link.section}
              className="cursor-pointer hover:text-orange-400 transition"
              onClick={() => scrollTo(link.section)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
