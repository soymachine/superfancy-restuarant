import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Vegan, Fish, Beef, Cherry, ChefHat } from 'lucide-react';

const categories = [
  { id: 'starters', name: 'Entrantes', icon: Cherry },
  { id: 'mains', name: 'Principales', icon: ChefHat },
  { id: 'seafood', name: 'Pescados', icon: Fish },
  { id: 'meat', name: 'Carnes', icon: Beef },
  { id: 'vegan', name: 'Vegano', icon: Vegan },
];

const menuItems = {
  starters: [
    { name: 'Tartar de Atún Rojo', description: 'Con aguacate, sésamo tostado y emulsión de wasabi', price: '24€', tag: 'Chef' },
    { name: 'Carpaccio de Buey', description: 'Parmesano reggiano, rúcula fresca y aceite de trufa', price: '22€', tag: 'Popular' },
    { name: 'Foie Gras Mi-cuit', description: 'Compota de manzana caramelizada y brioche tostado', price: '28€', tag: null },
    { name: 'Gambas al Ajillo', description: 'Con ajo confitado, guindilla y aceite de oliva virgen', price: '18€', tag: null },
  ],
  mains: [
    { name: 'Risotto de Boletus', description: 'Parmesano 36 meses, aceite de perejil y lascas de trufa', price: '32€', tag: 'Veggie' },
    { name: 'Ravioles de Langosta', description: 'En salsa de crustáceos con tomate confitado', price: '34€', tag: 'Chef' },
    { name: 'Tagliatelle al Tartufo', description: 'Mantequilla montada, yema curada y trufa negra', price: '36€', tag: 'Popular' },
  ],
  seafood: [
    { name: 'Lubina a la Sal', description: 'Con verduras asadas y emulsión de azafrán', price: '38€', tag: null },
    { name: 'Bacalao al Pil Pil', description: 'Aceite de oliva emulsionado, guindilla y ajos', price: '32€', tag: 'Tradición' },
    { name: 'Gamba Roja de Dénia', description: 'A la plancha con sal marina y aceite de oliva arbequina', price: '45€', tag: 'Premium' },
  ],
  meat: [
    { name: 'Solomillo de Buey', description: 'Con patatas soufflé y salsa de pimienta verde', price: '42€', tag: 'Popular' },
    { name: 'Costillas de Cordero', description: 'Bajas y lentas, con puré de chirivía y romero', price: '38€', tag: null },
    { name: 'Magret de Pato', description: 'Con salsa de naranja, jengibre y pak choi salteado', price: '36€', tag: 'Chef' },
  ],
  vegan: [
    { name: 'Pulpo de Coliflor', description: 'Con pimentón de la vera, patatas y aceite de oliva', price: '26€', tag: 'Veggie' },
    { name: 'Setas Salteadas', description: 'Con polenta cremosa, tomillo y aceite de trufa', price: '24€', tag: null },
    { name: 'Milhojas de Verduras', description: 'Berenjena, calabacín, pimiento y tomate asado', price: '22€', tag: 'Veggie' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Nuestra Carta</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Menú <span className="text-gradient italic">Exquisito</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg">
            Descubre una selección de platos cuidadosamente elaborados con los mejores ingredientes de temporada.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'text-charcoal-950'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gold-500 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <category.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.name}
                className="group relative p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl text-gold-400">{item.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                {item.tag && (
                  <div className="mt-3 inline-flex items-center gap-1">
                    <Flame className="w-3 h-3 text-gold-400" />
                    <span className="text-xs text-gold-400/80">{item.tag}</span>
                  </div>
                )}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-px bg-gold-500/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}