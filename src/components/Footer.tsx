import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Send,
  ArrowRight
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function Footer() {
  const { t } = useI18n();
  const safeT = useSafeT();

  const quickLinks = [
    { label: safeT('nav.home', 'Home'), path: '/' },
    { label: safeT('nav.about', 'About'), path: '/about' },
    { label: safeT('nav.programs', 'Programs'), path: '/programs' },
    { label: safeT('nav.donate', 'Donate'), path: '/donate' },
    { label: safeT('nav.sponsor', 'Sponsor'), path: '/sponsor' },
    { label: safeT('nav.impact', 'Impact'), path: '/impact' },
    { label: safeT('nav.news', 'News'), path: '/news' },
    { label: safeT('nav.volunteer', 'Volunteer'), path: '/volunteer' },
  ];

  const programLinks = [
    { label: safeT('programs.orphanSupport', 'Orphan Support'), path: '/programs' },
    { label: safeT('programs.education', 'Education'), path: '/programs' },
    { label: safeT('programs.healthcare', 'Healthcare'), path: '/programs' },
    { label: safeT('programs.women', 'Women Empowerment'), path: '/programs' },
    { label: safeT('programs.sports', 'Sports'), path: '/programs' },
    { label: safeT('programs.culture', 'Culture'), path: '/programs' },
  ];

  // Social media links with translations
  const socialLinks = [
    {
      Icon: MessageCircle,
      label: safeT('social.whatsappLabel', 'WhatsApp'),
      href: safeT('social.whatsapp', 'https://wa.me/25769298436'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      Icon: Facebook,
      label: safeT('social.facebookLabel', 'Facebook'),
      href: safeT('social.facebook', 'https://facebook.com/fondationmariam'),
      color: 'bg-[#1877F2] hover:bg-[#0D65D9]'
    },
    {
      Icon: Instagram,
      label: safeT('social.instagramLabel', 'Instagram'),
      href: safeT('social.instagram', 'https://instagram.com/fondationmariam'),
      color: 'bg-[#E4405F] hover:bg-[#C13584]'
    },
    {
      Icon: Linkedin,
      label: safeT('social.linkedinLabel', 'LinkedIn'),
      href: safeT('social.linkedin', 'https://linkedin.com/company/fondationmariam'),
      color: 'bg-[#0A66C2] hover:bg-[#004182]'
    },
    {
      Icon: Youtube,
      label: safeT('social.youtubeLabel', 'YouTube'),
      href: safeT('social.youtube', 'https://youtube.com/fondationmariam'),
      color: 'bg-[#FF0000] hover:bg-[#CC0000]'
    },
  ];

  return (
    <footer className="bg-[#0A1929] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.jpg"
                alt="Fondation Mariam"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
              />
              <div>
                <p className="font-serif font-bold text-lg leading-tight">Fondation Mariam</p>
                <p className="text-[#D4AF37] text-xs tracking-wider">{safeT('footer.tagline', 'La Lumière de la Nation')}</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {safeT('footer.newsletterText', 'Transforming lives through education, healthcare, empowerment, and humanitarian support in Burundi since 1978.')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${color} text-white`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase text-xs tracking-widest">
              {safeT('footer.quickLinks', 'Quick Links')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase text-xs tracking-widest">
              {safeT('footer.programs', 'Our Programs')}
            </h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/partnerships"
                  className="text-white/60 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {safeT('nav.partnerships', 'Partnerships')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6 uppercase text-xs tracking-widest">
              {safeT('footer.contactUs', 'Contact Us')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm">
                  <p>Kinama, Quartier Ruyigi</p>
                  <p>24e Avenue N°57</p>
                  <p>Bujumbura, Burundi</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm">
                  <p>+257 79 97 64 45</p>
                  <p>+257 69 29 84 36</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <a
                  href={safeT('social.whatsapp', 'https://wa.me/25769298436')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  {safeT('social.whatsappLabel', 'WhatsApp')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:mariamfondation@gmail.com"
                  className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors break-all"
                >
                  mariamfondation@gmail.com
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[#D4AF37] text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {safeT('nav.contact', 'Contact')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-white/40 text-center md:text-left">
              <p>{safeT('footer.copyright', '© 1978-2024 Fondation Mariam. Tous droits réservés.')}</p>
              <p className="text-white/30 text-xs mt-0.5">Designed &amp; Developed by GLWT</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/privacy"
                className="text-white/40 hover:text-[#D4AF37] transition-colors"
              >
                {safeT('footer.privacy', 'Privacy Policy')}
              </Link>
              <Link
                to="/terms"
                className="text-white/40 hover:text-[#D4AF37] transition-colors"
              >
                {safeT('footer.terms', 'Terms of Use')}
              </Link>
              <Link
                to="/about"
                className="text-white/40 hover:text-[#D4AF37] transition-colors"
              >
                {safeT('footer.transparency', 'Transparency Center')}
              </Link>
              <Link
                to="/contact"
                className="text-white/40 hover:text-[#D4AF37] transition-colors"
              >
                {safeT('nav.contact', 'Contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}