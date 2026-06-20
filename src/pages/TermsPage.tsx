import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, Scale, Shield, Mail, ArrowLeft, Heart } from 'lucide-react';

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  content?: string;
  items?: string[];
}

const sections: Section[] = [
  {
    id: 'acceptance',
    icon: FileText,
    title: 'Acceptance of Terms',
    content: 'By accessing and using the Fondation Mariam website (the "Site"), you accept and agree to be bound by these Terms of Use. If you do not agree with any of these terms, you must not use the Site. We reserve the right to modify these terms at any time. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.'
  },
  {
    id: 'use',
    icon: Shield,
    title: 'Permitted Use of This Website',
    items: [
      'This website is provided for informational, educational, and fundraising purposes related to the humanitarian mission of Fondation Mariam.',
      'You may access and view content on this Site for personal, non-commercial use.',
      'You must not use the Site to distribute spam, malicious content, or conduct any activity that could harm the Site, our organization, or other users.',
      'You must not attempt to gain unauthorized access to any part of the Site or its underlying systems.',
      'Commercial use of any content from this Site without express written permission is strictly prohibited.'
    ]
  },
  {
    id: 'donations',
    icon: Heart,
    title: 'Donations Disclaimer',
    content: 'All donations made to Fondation Mariam are voluntary and non-refundable except in cases of documented processing errors. Fondation Mariam is a recognized non-profit organization (Ord. Min. N°550/936 du 05/06/2020) in Burundi. Donations are used to fund our humanitarian programs including education, healthcare, food assistance, women empowerment, disability support, and community development.',
    items: [
      'Donations are processed through secure banking channels. Bank: Banque Commerciale du Burundi (BCB), Account: 20311600016, SWIFT: BCBUBIBI.',
      'Tax receipts or acknowledgment documentation will be provided upon request for qualifying donations.',
      'Fondation Mariam commits to using donations transparently and efficiently in accordance with our stated mission.',
      'Specific fund designations (education, healthcare, etc.) are honored to the best of our ability but may be redirected where urgent need exists.',
      'Fondation Mariam does not guarantee specific outcomes from any donation.'
    ]
  },
  {
    id: 'ip',
    icon: Scale,
    title: 'Intellectual Property',
    content: 'All content on this Site, including but not limited to text, photographs, graphics, logos, and the Fondation Mariam name and logo, is the property of Fondation Mariam and is protected by applicable intellectual property laws.',
    items: [
      'You may share links to our content for non-commercial purposes, with appropriate attribution.',
      'You may not reproduce, distribute, or create derivative works of our content without prior written permission.',
      'The Fondation Mariam name, logo, and "La Lumière de la Nation" slogan are trademarks of the foundation.',
      'Stock images displayed on this Site are licensed for use and may not be extracted or reused independently.'
    ]
  },
  {
    id: 'liability',
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: 'The information on this Site is provided "as is" without warranty of any kind. Fondation Mariam makes no representations or warranties about the accuracy, completeness, or suitability of the information for any particular purpose.',
    items: [
      'Fondation Mariam shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this Site.',
      'We do not guarantee uninterrupted or error-free access to the Site.',
      'Fondation Mariam is not responsible for the content of external websites linked from this Site.',
      'While we take all reasonable precautions, we cannot guarantee the absolute security of information transmitted over the internet.'
    ]
  },
  {
    id: 'responsibilities',
    icon: Shield,
    title: 'User Responsibilities',
    items: [
      'You are responsible for ensuring that any information you provide to us is accurate and up-to-date.',
      'You must not impersonate Fondation Mariam or any of its representatives.',
      'You must not use this Site to collect information about other users.',
      'You agree not to conduct any form of fundraising in the name of Fondation Mariam without our explicit written authorization.',
      'Volunteer applicants and partners are responsible for the accuracy of information they submit.',
      'You agree to use this Site in compliance with all applicable local, national, and international laws.'
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm font-medium">Last updated: January 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using the Fondation Mariam website.
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
            Back to Home
          </Link>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6"
          >
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use govern your access to and use of the website of{' '}
              <strong>Fondation Mariam</strong>, a humanitarian non-profit organization
              registered in Burundi (Ord. Min. N°550/936 du 05/06/2020), headquartered at
              Kinama, Quartier Ruyigi, 24e Avenue N°57, Bujumbura. These terms apply to all
              visitors, donors, volunteers, partners, and any other users of the Site.
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
                  <h2 className="text-xl font-serif font-bold text-[#1E3A5F]">{section.title}</h2>
                </div>
                <div className="p-6">
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-xs flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-6"
          >
            <h2 className="text-xl font-serif font-bold text-[#1E3A5F] mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with the laws
              of the Republic of Burundi. Any disputes arising from these terms or your use of
              this Site shall be subject to the exclusive jurisdiction of the courts of Burundi.
              International users acknowledge that their use of this Site is voluntary and subject
              to these governing terms.
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
                <h2 className="text-xl font-serif font-bold mb-3">Questions About These Terms?</h2>
                <p className="text-white/80 mb-4">
                  If you have questions about these Terms of Use, please contact us:
                </p>
                <div className="space-y-1 text-white/80">
                  <p><strong className="text-white">Fondation Mariam</strong></p>
                  <p>Kinama, Quartier Ruyigi, 24e Avenue N°57</p>
                  <p>BP 398, Bujumbura, Burundi</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:mariamfondation@gmail.com" className="text-[#D4AF37] hover:underline">
                      mariamfondation@gmail.com
                    </a>
                  </p>
                  <p>Tel: +257 79 97 64 45</p>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-gray-500 text-sm mt-8 pb-8">
            These Terms of Use were last updated on January 1, 2026. Fondation Mariam reserves the
            right to update these terms at any time by posting a revised version on this page.
          </p>
        </div>
      </section>
    </div>
  );
}
