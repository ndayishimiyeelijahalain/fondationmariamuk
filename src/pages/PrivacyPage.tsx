import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Mail, ArrowLeft } from 'lucide-react';

const sections = [
  {
    id: 'collection',
    icon: Eye,
    title: 'Information We Collect',
    items: [
      {
        subtitle: 'Personal Information',
        text: 'When you interact with Fondation Mariam, we may collect personal information including: full name, email address, postal address, telephone number, and payment information when processing donations.'
      },
      {
        subtitle: 'Contact Forms',
        text: 'When you submit a contact form, volunteer application, or partnership inquiry, we collect the information you provide to respond to your request and maintain a record of our communications.'
      },
      {
        subtitle: 'Newsletter Subscriptions',
        text: 'When you subscribe to our newsletter, we collect your email address and, optionally, your name. You may unsubscribe at any time by clicking the link in any of our emails.'
      },
      {
        subtitle: 'Donation Information',
        text: 'For donations processed through our platform, we collect the details necessary to process your contribution and provide you with tax receipts and acknowledgment letters as required.'
      }
    ]
  },
  {
    id: 'cookies',
    icon: Shield,
    title: 'Cookies & Analytics',
    items: [
      {
        subtitle: 'Essential Cookies',
        text: 'We use essential cookies to ensure the basic functionality of our website, including language preferences and session management. These cannot be disabled without affecting site functionality.'
      },
      {
        subtitle: 'Analytics',
        text: 'We may use analytics tools to understand how visitors interact with our website. This data is aggregated and anonymized, helping us improve the user experience. We do not sell this data to third parties.'
      },
      {
        subtitle: 'Your Cookie Choices',
        text: 'You may disable non-essential cookies through your browser settings. Please note that some features of our website may not function correctly if cookies are disabled.'
      }
    ]
  },
  {
    id: 'use',
    icon: UserCheck,
    title: 'How We Use Your Information',
    items: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your information to process donations, send receipts and tax documentation, respond to inquiries, manage sponsorships, and deliver our newsletter or program updates you have opted into.'
      },
      {
        subtitle: 'Communication',
        text: 'With your consent, we may contact you with information about our programs, impact reports, fundraising campaigns, and important announcements related to Fondation Mariam.'
      },
      {
        subtitle: 'Legal Obligations',
        text: 'We may use or disclose your information where required by law, including for tax and regulatory compliance purposes as a recognized non-profit organization in Burundi.'
      }
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Data Security',
    items: [
      {
        subtitle: 'Protection Measures',
        text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, accidental loss, alteration, or disclosure. All data transmissions are encrypted using SSL/TLS technology.'
      },
      {
        subtitle: 'Data Retention',
        text: 'We retain your personal information only for as long as necessary for the purposes described in this policy, or as required by applicable laws. Donor records are typically retained for seven years for legal and tax purposes.'
      },
      {
        subtitle: 'International Transfers',
        text: 'As an international humanitarian organization, your data may be accessed or transferred across borders. We ensure appropriate safeguards are in place wherever your data is processed, in compliance with international data protection principles.'
      }
    ]
  },
  {
    id: 'rights',
    icon: UserCheck,
    title: 'Your Rights',
    items: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to request access to the personal information we hold about you, and to request that any inaccurate information be corrected. Please contact us in writing to exercise this right.'
      },
      {
        subtitle: 'Deletion',
        text: 'You may request deletion of your personal data. We will comply unless we are legally required to retain the information (for example, for financial records or legal compliance).'
      },
      {
        subtitle: 'Opt-Out',
        text: 'You may opt out of marketing and newsletter communications at any time. Use the unsubscribe link in our emails or contact us directly. Note that we may still send transactional messages related to your donations or requests.'
      }
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm font-medium">{t.privacy.lastUpdated}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              {t.privacy.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t.privacy.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-medium hover:text-[#D4AF37] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.common.back} {t.nav.home}
          </Link>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8"
          >
            <p className="text-gray-700 leading-relaxed">
              {t.privacy.intro}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="flex items-center gap-4 p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-[#1E3A5F]">{t.privacy[`section${section.id.charAt(0).toUpperCase() + section.id.slice(1)}Title` as keyof typeof t.privacy]}</h2>
                </div>
                <div className="p-6 space-y-6">
                  {section.items.map((item, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-[#1E3A5F] mb-2">{t.privacy[`${section.id}${item.subtitle.split(' ')[0]}Subtitle` as keyof typeof t.privacy]}</h3>
                      <p className="text-gray-600 leading-relaxed">{t.privacy[`${section.id}${item.subtitle.split(' ')[0]}Text` as keyof typeof t.privacy]}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Parties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-6"
          >
            <h2 className="text-xl font-serif font-bold text-[#1E3A5F] mb-4">{t.privacy.thirdPartyServicesTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.privacy.thirdPartyServicesText1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.thirdPartyServicesText2}
            </p>
          </motion.div>

          {/* International Donors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#D4AF37]/10 to-[#10B981]/10 rounded-2xl border border-[#D4AF37]/20 p-8 mt-6"
          >
            <h2 className="text-xl font-serif font-bold text-[#1E3A5F] mb-4">{t.privacy.internationalDonorsTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {t.privacy.internationalDonorsText1}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.privacy.internationalDonorsText2}
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E3A5F] text-white rounded-2xl p-8 mt-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-bold mb-3">{t.privacy.contactTitle}</h2>
                <p className="text-white/80 mb-4">
                  {t.privacy.contactText}
                </p>
                <div className="space-y-1 text-white/80">
                  <p><strong className="text-white">{t.common.contactOfficeName}</strong></p>
                  <p>{t.common.contactAddress1}</p>
                  <p>{t.common.contactAddress2}</p>
                  <p>
                    {t.common.contactEmail}:{' '}
                    <a href="mailto:mariamfondation@gmail.com" className="text-[#D4AF37] hover:underline">
                      mariamfondation@gmail.com
                    </a>
                  </p>
                  <p>{t.common.contactPhone}: +257 79 97 64 45</p>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-gray-500 text-sm mt-8 pb-8">
            {t.common.footerUpdated.replace('January 1, 2026', 'January 1, 2026')}
          </p>
        </div>
      </section>
    </div>
  );
}
