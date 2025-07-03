import { motion } from 'framer-motion';

function QuienesSomos({ sectionRef }) {
  return (
    <section
      id="quienesSomos"
      ref={sectionRef}
      className="bg-[#1b1b1b] text-white py-16 px-6 overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiénes somos?</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          <strong className="text-orange-400">MonteClaro</strong> es una finca familiar dedicada a la producción
          artesanal de café en las montañas salvadoreñas. Combinamos técnicas tradicionales con prácticas
          sostenibles para ofrecer un café de la más alta calidad, cultivado con amor y dedicación.
        </p>

        {/* Imagen con animación de entrada y hover suave */}
        <motion.div
          className="mt-8 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/media/cafe-finca.jpg"
            alt="Finca de café"
            className="w-full max-w-3xl mx-auto object-cover transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default QuienesSomos;
