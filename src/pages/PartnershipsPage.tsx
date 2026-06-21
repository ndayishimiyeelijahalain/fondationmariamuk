import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Church,
  Globe,
  Heart,
  Users,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function PartnershipsPage() {
  const { t } = useI18n();
  const safeT = useSafeT();

  const partnerTypes = [
    {
      icon: Building2,
      title: 'Corporate Partnerships',
      desc: 'Partner with us for CSR initiatives, employee giving programs, and corporate sponsorships.',
      benefits: ['Brand exposure', 'Employee engagement', 'Impact reporting', 'Recognition']
    },
    {
      icon: Church,
      title: 'Church Partnerships',
      desc: 'Connect your congregation with meaningful mission opportunities.',
      benefits: ['Mission trips', 'Sponsorship programs', 'Prayer support', 'Awareness']
    },
    {
      icon: Globe,
      title: 'NGO & Foundation Partnerships',
      desc: 'Collaborate on programs, share resources, and amplify impact together.',
      benefits: ['Joint programs', 'Resource sharing', 'Capacity building', 'Advocacy']
    },
    {
      icon: Users,
      title: 'Embassy & Diplomatic Partnerships',
      desc: 'Support humanitarian development through diplomatic channels.',
      benefits: ['Development programs', 'Cultural exchange', 'Technical assistance', 'Visibility']
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
              {safeT('nav.partnerships', 'Become a Partner')}
            </h1>
            <p className="text-lg text-white/80">
              Join our network of organizations committed to transforming lives in Burundi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <partner.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{partner.title}</h3>
                  <p className="text-gray-600 mb-6">{partner.desc}</p>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-[#10B981]" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E3A5F] mb-2">46+ Years of Trust</h3>
              <p className="text-gray-600 text-sm">Recognized ministry with proven track record</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E3A5F] mb-2">Transparent Operations</h3>
              <p className="text-gray-600 text-sm">Full accountability and impact reporting</p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1E3A5F] mb-2">Community Rooted</h3>
              <p className="text-gray-600 text-sm">Deep connections with local communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] via-[#F5D76E] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-6">
            Start a Partnership
          </h2>
          <p className="text-[#1E3A5F]/80 mb-8">
            Contact us to discuss partnership opportunities
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A5F] text-white rounded-full font-semibold hover:bg-[#0F2744] transition-all group"
          >
            {safeT('nav.contact', 'Contact Us')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}