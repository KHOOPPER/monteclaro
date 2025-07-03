import { motion } from 'framer-motion';
import { galeriaImages } from '../assets/images';

function Galeria({ sectionRef }) {
  return (
    <section id="galeria" ref={sectionRef} className="bg-[#121212] text-white py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Galería</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galeriaImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: 'spring', stiffness: 180, damping: 12 }}
            >
              <img
                src={img}
                alt={`Imagen del proceso de café MonteClaro ${idx + 1}`}
                className="w-full h-64 object-cover hover:brightness-110 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Galeria;
