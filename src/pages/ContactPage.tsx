import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
  Youtube,
  Loader2,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function ContactPage() {
  const { t } = useI18n();
  const safeT = useSafeT();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS Configuration - Utilise les variables d'environnement
  const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_4v7rav1',
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9lowopt',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'G_eHAcu-zwbk7Z0U4',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsLoading(true);
    setIsError(false);
    setErrorMessage('');

    try {
      console.log('📧 Envoi du formulaire...');
      console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
      console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
      
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('✅ Email envoyé avec succès:', result.text);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le message de succès après 10 secondes
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
      
    } catch (error: any) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      setIsError(true);
      setErrorMessage(error.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  // Social media links
  const socialLinks = [
    { 
      icon: Facebook, 
      label: safeT('social.facebookLabel', 'Facebook'),
      url: safeT('social.facebook', 'https://facebook.com/fondationmariam'),
      color: 'hover:bg-[#1877F2]'
    },
    { 
      icon: Instagram, 
      label: safeT('social.instagramLabel', 'Instagram'),
      url: safeT('social.instagram', 'https://instagram.com/fondationmariam'),
      color: 'hover:bg-[#E4405F]'
    },
    { 
      icon: Linkedin, 
      label: safeT('social.linkedinLabel', 'LinkedIn'),
      url: safeT('social.linkedin', 'https://linkedin.com/company/fondationmariam'),
      color: 'hover:bg-[#0A66C2]'
    },
    { 
      icon: Youtube, 
      label: safeT('social.youtubeLabel', 'YouTube'),
      url: safeT('social.youtube', 'https://youtube.com/fondationmariam'),
      color: 'hover:bg-[#FF0000]'
    },
    { 
      icon: MessageCircle, 
      label: safeT('social.whatsappLabel', 'WhatsApp'),
      url: safeT('social.whatsapp', 'https://wa.me/25769298436'),
      color: 'hover:bg-[#25D366]'
    },
  ];

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
              <h2 className="text-2xl font-serif font-bold text-[#1E3A5F] mb-2">
                {safeT('contact.sendMessage', 'Envoyer un Message')}
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Tous les messages seront envoyés à {''}
                <a href="mailto:mariamfondation@gmail.com" className="text-[#D4AF37] hover:underline">
                  mariamfondation@gmail.com
                </a>
              </p>

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    Message envoyé avec succès ! ✅
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Une copie a été envoyée à mariamfondation@gmail.com
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.fullName', 'Nom Complet')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.emailLabel', 'Adresse Email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.subject', 'Sujet')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {safeT('contact.message', 'Message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      required
                      disabled={isLoading}
                      placeholder="Votre message..."
                    />
                  </div>

                  {isError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      ❌ {errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-[#1E3A5F] to-[#0F2744] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {safeT('contact.submit', 'Envoyer')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] text-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6">
                  {safeT('social.followUs', 'Suivez-nous sur les réseaux sociaux')}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 ${social.color}`}
                      >
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Head Office */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">{safeT('contact.headOffice', 'Siège Social')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Kinama, Quartier Ruyigi</p>
                      <p className="text-gray-600">24e Avenue N°57</p>
                      <p className="text-gray-600">Bujumbura, Burundi</p>
                      <p className="text-gray-600">BP 398</p>
                    </div>
                  </div>
                </div>
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

              {/* WhatsApp Direct */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={safeT('social.whatsapp', 'https://wa.me/25769298436')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  {safeT('social.whatsappLabel', 'Chat WhatsApp Direct')}
                </a>
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

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200">
            <iframe
              title="Fondation Mariam"
              src="https://maps.google.com/maps?q=Kinama%20Ruyigi%20Bujumbura&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}