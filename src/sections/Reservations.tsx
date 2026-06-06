import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, Send, Check, UtensilsCrossed } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputClasses = (field: string) =>
    `w-full bg-white/5 border ${
      focusedField === field ? 'border-gold-400/50' : 'border-white/10'
    } rounded-xl px-4 py-3.5 text-white placeholder-white/30 outline-none transition-all duration-300 focus:bg-white/10`;

  return (
    <section id="reservations" className="relative py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Reservas</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tu mesa <span className="text-gradient italic">te espera</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Reserva con anticipación para asegurar la mejor experiencia. 
              Para grupos de más de 8 personas, por favor contáctanos directamente.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { icon: Phone, label: 'Teléfono', value: '+34 912 345 678' },
                { icon: Mail, label: 'Email', value: 'reservas@superfancy.com' },
                { icon: Clock, label: 'Horario', value: 'Lun - Dom: 13:00 - 16:00, 20:00 - 23:30' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent rounded-3xl blur-2xl" />
              <form
                onSubmit={handleSubmit}
                className="relative glass rounded-3xl p-8 md:p-10 space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <UtensilsCrossed className="w-6 h-6 text-gold-400" />
                  <h3 className="font-serif text-2xl text-white">Hacer Reserva</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className={inputClasses('name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className={inputClasses('email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className={`${inputClasses('phone')} pl-11`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      className={`${inputClasses('guests')} pl-11 appearance-none cursor-pointer`}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      onFocus={() => setFocusedField('guests')}
                      onBlur={() => setFocusedField(null)}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-charcoal-900">{n} {n === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      className={`${inputClasses('date')} pl-11`}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      className={`${inputClasses('time')} pl-11 appearance-none cursor-pointer`}
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      onFocus={() => setFocusedField('time')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" className="bg-charcoal-900">Seleccionar hora</option>
                      <option value="13:00" className="bg-charcoal-900">13:00</option>
                      <option value="13:30" className="bg-charcoal-900">13:30</option>
                      <option value="14:00" className="bg-charcoal-900">14:00</option>
                      <option value="14:30" className="bg-charcoal-900">14:30</option>
                      <option value="20:00" className="bg-charcoal-900">20:00</option>
                      <option value="20:30" className="bg-charcoal-900">20:30</option>
                      <option value="21:00" className="bg-charcoal-900">21:00</option>
                      <option value="21:30" className="bg-charcoal-900">21:30</option>
                      <option value="22:00" className="bg-charcoal-900">22:00</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Notas especiales (alergias, ocasión especial...)"
                    rows={3}
                    className={inputClasses('notes')}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    onFocus={() => setFocusedField('notes')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full relative py-4 bg-gold-500 text-charcoal-950 font-semibold rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gold-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        ¡Reserva confirmada!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Confirmar Reserva
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}