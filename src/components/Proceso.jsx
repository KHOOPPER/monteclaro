import { motion } from 'framer-motion';
import procesoSteps from '../data/procesoSteps';

function Proceso({ sectionRef }) {
  return (
    <section id="proceso" ref={sectionRef} className="bg-[#1c1c1c] text-white py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Proceso Artesanal</h2>
        
        <div className="grid gap-10">
          {procesoSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-6`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={step.image}
                alt={`Paso ${idx + 1}: ${step.title}`}
                className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Proceso;
