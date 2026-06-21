import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function ContactPage() {
  const { t } = useI18n();
  const safeT = useSafeT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              {safeT('contact.title', 'Contactez-Nous')}
            </h1>
            <p className="text-lg text-white/80">
              {safeT('contact.subtitle', 'Nous sommes là pour répondre à vos questions')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-[#1E3A5F] mb-6">
                {safeT('contact.sendMessage', 'Envoyer un Message')}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.fullName', 'Nom Complet')}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.emailLabel', 'Adresse Email')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.subject', 'Sujet')}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.message', 'Message')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#1E3A5F] to-[#0F2744] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {safeT('contact.submit', 'Envoyer')}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Head Office */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] text-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6">{safeT('contact.headOffice', 'Siège Social')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <p>Kinama, Quartier Ruyigi</p>
                      <p>24e Avenue N°57</p>
                      <p>Bujumbura, Burundi</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Postal Address */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">{safeT('contact.postalAddress', 'Adresse Postale')}</h3>
                <p className="text-gray-600">BP 398</p>
                <p className="text-gray-600">Bujumbura, Burundi</p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{safeT('contact.phone', 'Téléphone')}</p>
                      <p className="text-[#1E3A5F] font-medium">+257 79 97 64 45</p>
                      <p className="text-[#1E3A5F] font-medium">+257 69 29 84 36</p>
                      <p className="text-[#1E3A5F] font-medium">+257 76 90 93 96</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/25769298436"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp Direct
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{safeT('contact.email', 'Email')}</p>
                      <a href="mailto:mariamfondation@gmail.com" className="text-[#1E3A5F] font-medium hover:text-[#D4AF37] transition-colors">
                        mariamfondation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#D4AF37]/10 rounded-2xl p-8 border border-[#D4AF37]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold text-[#1E3A5F]">{safeT('contact.officeHours', 'Heures d\'Ouverture')}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>{safeT('contact.weekdays', 'Lundi - Vendredi')}:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>{safeT('contact.saturday', 'Samedi')}:</strong> 9:00 AM - 12:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200 flex items-center justify-center">
            <iframe
              title="Fondation Mariam"
              src="https://maps.google.com/maps?q=Kinama%20Ruyigi%20Bujumbura&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}