import { motion } from 'framer-motion';
import { useState } from 'react';

function Contacto({ sectionRef }) {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/50370009306?text=${encodeURIComponent(
      `Hola, soy ${form.name}. Quisiera más información sobre el café MonteClaro.\n\n${form.message}`
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="bg-[#0d0d0d] text-white py-20 px-6"
    >
      <motion.div
        className="max-w-xl mx-auto text-center backdrop-blur-sm bg-white/5 rounded-xl shadow-lg p-8 border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold mb-2 text-white drop-shadow">
          Contáctanos
        </h2>
        <p className="text-gray-300 mb-6">
          ¿Interesado en nuestro café artesanal? Envíanos un mensaje por WhatsApp y con gusto te atenderemos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          <div className="relative">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="relative">
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full px-4 py-3 rounded bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/40"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contacto;
