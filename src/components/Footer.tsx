import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Share2, MessageCircle, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-charcoal-950" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="w-8 h-8 text-gold-400" />
              <span className="font-serif text-2xl font-semibold text-white">
                Super<span className="text-gold-400">fancy</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Una experiencia culinaria extraordinaria donde la tradición se encuentra con la innovación.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
                <MapPin className="w-4 h-4 group-hover:text-gold-400" />
                <span className="text-sm">Calle Gran Vía 42, Madrid</span>
              </a>
              <a href="tel:+34912345678" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
                <Phone className="w-4 h-4 group-hover:text-gold-400" />
                <span className="text-sm">+34 912 345 678</span>
              </a>
              <a href="mailto:info@superfancy.com" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:text-gold-400" />
                <span className="text-sm">info@superfancy.com</span>
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Horario</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/50">
                <span>Lunes - Viernes</span>
                <span>13:00 - 16:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span></span>
                <span>20:00 - 23:30</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Sábado - Domingo</span>
                <span>13:00 - 16:30</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span></span>
                <span>20:00 - 00:00</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Síguenos</h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, label: 'Web' },
                { icon: Share2, label: 'Social' },
                { icon: MessageCircle, label: 'Chat' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-gold-400 hover:bg-gold-500/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/30 text-sm">
            © 2024 Superfancy Restaurant. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white/60 transition-colors">Términos</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}