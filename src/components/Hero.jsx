import { motion } from 'framer-motion';

function Hero() {
  const scrollToSection = () => {
    document.getElementById('quienesSomos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/video-presentacion.mp4"
        autoPlay
        muted
        loop
      />

      {/* Capa de oscuridad con degradado + desenfoque */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />
      <div className="absolute inset-0 backdrop-blur-[1px] z-10" />

      {/* Contenido central */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/media/logo-monteclaro.png"
          alt="MonteClaro Logo"
          className="w-28 md:w-40 mb-6 drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Café Artesanal <span className="text-orange-400">MonteClaro</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200 drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Tradición familiar, sabor auténtico desde las montañas de El Salvador.
        </motion.p>

        {/* Botón animado que redirige a #contacto */}
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 px-6 rounded-full shadow-lg"
        >
          Contáctanos
        </motion.a>
      </motion.div>

      {/* Flecha animada para scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Luces decorativas arriba y abajo */}
      <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default Hero;
