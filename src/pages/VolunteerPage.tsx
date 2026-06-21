import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  BookOpen,
  Stethoscope,
  Palette,
  Trophy,
  HardHat,
  CheckCircle
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function VolunteerPage() {
  const { t } = useI18n();
  const safeT = useSafeT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const opportunities = [
    { 
      icon: BookOpen, 
      key: 'education', 
      title: safeT('programs.education', 'Education Support'),
      desc: safeT('volunteer.educationDesc', 'Tutor children, help with homework, teach skills'),
      image: '/fondation-mariam/education-learning-01.jpg'
    },
    { 
      icon: Stethoscope, 
      key: 'healthcare',
      title: safeT('programs.healthcare', 'Healthcare'),
      desc: safeT('volunteer.healthcareDesc', 'Medical professionals for community outreach'),
      image: '/fondation-mariam/healthcare-clinic-01.jpg'
    },
    { 
      icon: Palette, 
      key: 'culture',
      title: safeT('programs.culture', 'Arts & Culture'),
      desc: safeT('volunteer.cultureDesc', 'Teach traditional dance, crafts, music'),
      image: '/fondation-mariam/gallery-courtyard-group-01.jpg'
    },
    { 
      icon: Trophy, 
      key: 'sports',
      title: safeT('programs.sports', 'Sports Coaching'),
      desc: safeT('volunteer.sportsDesc', 'Train youth in Taekwondo and other sports'),
      image: '/fondation-mariam/sports-taekwondo-training-01.jpg'
    },
    { 
      icon: HardHat, 
      key: 'construction',
      title: safeT('volunteer.construction', 'Construction'),
      desc: safeT('volunteer.constructionDesc', 'Help build and repair facilities'),
      image: '/fondation-mariam/impact-community-meal-01.jpg'
    },
    { 
      icon: Users, 
      key: 'outreach',
      title: safeT('volunteer.outreach', 'Community Outreach'),
      desc: safeT('volunteer.outreachDesc', 'Support distribution and event organization'),
      image: '/fondation-mariam/gallery-juice-distribution-01.jpg'
    },
  ];

  const benefits = [
    safeT('volunteer.benefit1', 'Make a direct impact on vulnerable communities'),
    safeT('volunteer.benefit2', 'Gain meaningful volunteer experience'),
    safeT('volunteer.benefit3', 'Work with a recognized humanitarian organization'),
    safeT('volunteer.benefit4', 'Receive support and guidance from our team'),
    safeT('volunteer.benefit5', 'Beautiful experience in Burundi'),
    safeT('volunteer.benefit6', 'Certificate of appreciation'),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(safeT('volunteer.submitSuccess', 'Application submitted successfully!'));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/fondation-mariam/volunteers-meeting-02.jpg" alt="Volunteers" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              {safeT('nav.volunteer', 'Volunteer With Us')}
            </h1>
            <p className="text-lg text-white/80">
              {safeT('volunteer.subtitle', 'Join our mission to transform lives in Burundi')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('volunteer.opportunities', 'Volunteer Opportunities')}
            </h2>
            <p className="text-gray-600">{safeT('volunteer.findYourRole', 'Find the best way to contribute your skills')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-all overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img src={opp.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-xl flex items-center justify-center mb-4">
                    <opp.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F] mb-2">{opp.title}</h3>
                  <p className="text-gray-600 text-sm">{opp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('volunteer.whyVolunteer', 'Why Volunteer With Us?')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-serif font-bold text-[#1E3A5F] mb-6 text-center">
              {safeT('volunteer.applyNow', 'Apply to Volunteer')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {safeT('contact.fullName', 'Full Name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {safeT('contact.emailLabel', 'Email')}
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
                    {safeT('contact.phone', 'Phone')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {safeT('volunteer.interest', 'Area of Interest')}
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                >
                  <option value="">{safeT('volunteer.selectArea', 'Select an area...')}</option>
                  {opportunities.map(opp => (
                    <option key={opp.key} value={opp.title}>{opp.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {safeT('volunteer.whyMessage', 'Why do you want to volunteer?')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder={safeT('volunteer.messagePlaceholder', 'Tell us about yourself and why you want to volunteer...')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#1E3A5F] to-[#0F2744] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" fill="white" />
                {safeT('volunteer.submit', 'Submit Application')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}