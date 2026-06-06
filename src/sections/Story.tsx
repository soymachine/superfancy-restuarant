import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Clock, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Tradición',
    description: 'Más de 20 años de excelencia culinaria, honrando las técnicas clásicas.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Ingredientes locales y de temporada, cultivados con respeto por la tierra.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Reconocidos con estrellas Michelin por nuestra dedicación a la perfección.',
  },
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="story" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Decorative line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent"
        style={{ scaleY: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images with parallax */}
          <motion.div className="relative" style={{ y, opacity, scale }}>
            <div className="relative z-10">
              <motion.div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 to-charcoal-900/80" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')] bg-cover bg-center" />
                <motion.div
                  className="absolute inset-0 bg-charcoal-950"
                  initial={{ y: 0 }}
                  whileInView={{ y: '-100%' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>

            {/* Floating secondary image */}
            <motion.div
              className="absolute -bottom-12 -right-8 w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10"
              style={{ rotate }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border border-gold-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Nuestra Historia</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Donde cada plato es una{' '}
                <span className="text-gradient italic">obra de arte</span>
              </h2>
            </motion.div>

            <motion.p
              className="mt-8 text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Fundado en 2004, Superfancy nació de la pasión por crear experiencias gastronómicas 
              inolvidables. Nuestro chef ejecutivo, con formación en las mejores cocinas de Europa, 
              ha diseñado un menú que celebra los sabores auténticos con un toque contemporáneo.
            </motion.p>

            <motion.p
              className="mt-4 text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Cada ingrediente es seleccionado cuidadosamente, cada técnica es perfeccionada 
              con dedicación, y cada servicio es una oportunidad para sorprender y deleitar.
            </motion.p>

            {/* Features */}
            <div className="mt-12 grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-white/50">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}