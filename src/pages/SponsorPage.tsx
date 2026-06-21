import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function SponsorPage() {
  const { t } = useI18n();
  const safeT = useSafeT();
  const [selectedAmount, setSelectedAmount] = useState(35);

  const sponsorshipAmounts = [25, 35, 50, 100];

  const steps = [
    { 
      key: 'chooseChild', 
      icon: Users, 
      title: safeT('sponsor.chooseChild', 'Choose a Child'),
      desc: safeT('sponsor.chooseChildDesc', 'Browse profiles of children waiting for sponsorship.'),
      image: '/gallery/children-01.jpg'
    },
    { 
      key: 'monthlySupport', 
      icon: Heart, 
      title: safeT('sponsor.monthlySupport', 'Monthly Support'),
      desc: safeT('sponsor.monthlySupportDesc', 'Contribute monthly for education, health and well-being.'),
      image: '/fondation-mariam/education-classroom-01.jpg'
    },
    { 
      key: 'buildRelationship', 
      icon: ChevronRight, 
      title: safeT('sponsor.buildRelationship', 'Build a Relationship'),
      desc: safeT('sponsor.buildRelationshipDesc', 'Receive updates and build a meaningful relationship.'),
      image: '/fondation-mariam/gallery-courtyard-group-01.jpg'
    },
  ];

  const benefits = [
    safeT('sponsor.educationSupport', 'Access to education'),
    safeT('sponsor.healthcareSupport', 'Healthcare'),
    safeT('sponsor.nutritionSupport', 'Proper nutrition'),
    safeT('sponsor.mentoringSupport', 'Mentoring and guidance'),
    safeT('sponsor.lifeSkillsSupport', 'Life skills'),
    safeT('sponsor.communityBenefit', 'Community benefit'),
  ];

  const children = [
    { 
      id: 1, 
      name: 'Amina', 
      age: 8, 
      bio: safeT('sponsor.childBio1', 'Loves learning and dreams of becoming a teacher'), 
      image: '/gallery/children-01.jpg' 
    },
    { 
      id: 2, 
      name: 'Jean', 
      age: 10, 
      bio: safeT('sponsor.childBio2', 'Enjoys football and wants to help his community'), 
      image: '/gallery/children-02.jpg' 
    },
    { 
      id: 3, 
      name: 'Grace', 
      age: 7, 
      bio: safeT('sponsor.childBio3', 'Bright student who loves to read'), 
      image: '/gallery/children-03.jpg' 
    },
    { 
      id: 4, 
      name: 'Patrick', 
      age: 12, 
      bio: safeT('sponsor.childBio4', 'Talented artist, needs school support'), 
      image: '/gallery/children-04.jpg' 
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/gallery/children-05.jpg" alt="Children" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
              <span className="text-white/90 text-sm font-medium">
                {safeT('sponsor.badge', 'Child Sponsorship Program')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {safeT('sponsor.title', 'Sponsor a Child')}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {safeT('sponsor.subtitle', 'Transform a life through monthly sponsorship')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('sponsor.howItWorks', 'How it Works')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                  <img src={step.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-full flex items-center justify-center text-[#1E3A5F] font-bold text-sm z-10">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-2xl flex items-center justify-center mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Children Waiting */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('sponsor.waitingChildren', 'Children Waiting for Sponsors')}
            </h2>
            <p className="text-gray-600">{safeT('sponsor.everyChildDeserves', 'Every child deserves a chance')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {children.map((child) => (
              <motion.div
                key={child.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold text-lg">{child.name}</p>
                    <p className="text-white/80 text-sm">{safeT('sponsor.age', 'Age')} {child.age}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{child.bio}</p>
                  <button className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] rounded-lg font-medium hover:shadow-lg transition-all">
                    {safeT('sponsor.sponsorChild', 'Sponsor')} {child.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gradient-to-br from-[#10B981] to-[#047857] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-12">
              {safeT('sponsor.impact', 'Impact of Sponsorship')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">
              {safeT('sponsor.selectAmount', 'Select Monthly Amount')}
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {sponsorshipAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-4 rounded-xl font-semibold transition-all ${
                    selectedAmount === amount
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  ${amount}/{safeT('sponsor.month', 'month')}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600">
                {safeT('sponsor.provides', 'Your')} ${selectedAmount}/{safeT('sponsor.month', 'month')} {safeT('sponsor.provides', 'provides')}:
              </p>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• {safeT('sponsor.schoolFees', 'School fees and supplies')}</li>
                <li>• {safeT('sponsor.meals', 'Daily nutritious meals')}</li>
                <li>• {safeT('sponsor.healthcare', 'Healthcare check-ups')}</li>
                <li>• {safeT('sponsor.development', 'Personal development support')}</li>
              </ul>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#1E3A5F] to-[#0F2744] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" fill="white" />
              {safeT('sponsor.applyNow', 'Apply Now')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}