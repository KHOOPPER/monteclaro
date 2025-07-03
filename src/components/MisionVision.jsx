import { motion } from 'framer-motion';

function MisionVision() {
  return (
    <section id="mision" className="bg-[#0e0e0e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
          <p className="text-lg leading-relaxed">
            Producir café artesanal de alta calidad con responsabilidad ambiental y compromiso social, 
            destacando el sabor auténtico de nuestras tierras y la historia de nuestra familia.
          </p>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">Nuestra Visión</h3>
          <p className="text-lg leading-relaxed">
            Ser reconocidos como un referente del café artesanal salvadoreño, 
            expandiendo nuestro legado familiar mientras conservamos la calidad, ética y amor por la tierra.
          </p>
        </motion.div>
      </div>

      <motion.img
        src="/media/proceso-cafe.jpg"
        alt="Imagen ilustrativa del proceso de producción del café MonteClaro"
        className="mt-12 rounded-xl shadow-lg w-full max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
}

export default MisionVision;
