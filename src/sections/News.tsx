import { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Nuevo Menú de Degustación Primavera',
    excerpt: 'Descubre los sabores de la temporada con nuestro menú especial de 8 tiempos, diseñado para sorprender tu paladar.',
    date: '15 Marzo 2024',
    readTime: '3 min',
    category: 'Novedades',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    id: 2,
    title: 'Cata de Vinos: Ribera del Duero',
    excerpt: 'Una velada exclusiva para los amantes del vino, presentando las mejores añadas de la región.',
    date: '22 Marzo 2024',
    readTime: '5 min',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
  },
  {
    id: 3,
    title: 'Entrevista con Nuestro Chef Ejecutivo',
    excerpt: 'Conoce la filosofía culinaria y los secretos detrás de cada creación de nuestra cocina.',
    date: '1 Abril 2024',
    readTime: '4 min',
    category: 'Detrás de cámaras',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="news" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Noticias</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Últimas <span className="text-gradient italic">Novedades</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TiltCard className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl glass border border-white/5 hover:border-gold-500/20 transition-colors">
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500/20 backdrop-blur-sm text-gold-300 text-xs font-medium rounded-full border border-gold-500/20">
                        {item.category}
                      </span>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold-300 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <motion.div
                      className="mt-4 inline-flex items-center gap-2 text-sm text-gold-400 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Leer más
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}