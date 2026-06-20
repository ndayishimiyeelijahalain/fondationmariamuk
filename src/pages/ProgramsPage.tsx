import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  BookOpen,
  Utensils,
  HeartPulse,
  Accessibility,
  Sparkles,
  Shield,
  HelpCircle,
  GraduationCap,
  AlertCircle,
  Palette,
  Trophy,
  ArrowRight,
  Trophy as TrophyIcon
} from 'lucide-react';
import { useI18n } from '../i18n';

export default function ProgramsPage() {
  const { t } = useI18n();

  const programs = [
    {
      id: 'orphanSupport',
      icon: Heart,
      color: 'from-rose-500 to-rose-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '500+',
        impact: t.programs.orphanSupport
      }
    },
    {
      id: 'education',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      image: 'gallery/craft-02.jpg',
      stats: {
        beneficiaries: '2,500+',
        impact: t.programs.education
      }
    },
    {
      id: 'food',
      icon: Utensils,
      color: 'from-amber-500 to-amber-600',
      image: 'gallery/woman-02.jpg',
      stats: {
        beneficiaries: '3,000+',
        impact: t.programs.food
      }
    },
    {
      id: 'healthcare',
      icon: HeartPulse,
      color: 'from-emerald-500 to-emerald-600',
      image: 'gallery/craft-03.jpg',
      stats: {
        beneficiaries: '1,500+',
        impact: t.programs.healthcare
      }
    },
    {
      id: 'disability',
      icon: Accessibility,
      color: 'from-purple-500 to-purple-600',
      image: 'gallery/children-01.jpg',
      stats: {
        beneficiaries: '300+',
        impact: t.programs.disability
      }
    },
    {
      id: 'women',
      icon: Sparkles,
      color: 'from-pink-500 to-pink-600',
      image: 'gallery/woman-02.jpg',
      stats: {
        beneficiaries: '1,200+',
        impact: t.programs.women
      }
    },
    {
      id: 'prisoners',
      icon: Shield,
      color: 'from-slate-500 to-slate-600',
      image: 'gallery/woman-03.jpg',
      stats: {
        beneficiaries: '200+',
        impact: t.programs.prisoners
      }
    },
    {
      id: 'unaccompanied',
      icon: HelpCircle,
      color: 'from-cyan-500 to-cyan-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '150+',
        impact: t.programs.unaccompanied
      }
    },
    {
      id: 'psychosocial',
      icon: HeartPulse,
      color: 'from-indigo-500 to-indigo-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '800+',
        impact: t.programs.psychosocial
      }
    },
    {
      id: 'vocational',
      icon: GraduationCap,
      color: 'from-teal-500 to-teal-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '600+',
        impact: t.programs.vocational
      }
    },
    {
      id: 'emergency',
      icon: AlertCircle,
      color: 'from-red-500 to-red-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '500+',
        impact: t.programs.emergency
      }
    },
    {
      id: 'culture',
      icon: Palette,
      color: 'from-orange-500 to-orange-600',
      image: 'gallery/children-05.jpg',
      stats: {
        beneficiaries: '400+',
        impact: t.programs.culture
      }
    },
    {
      id: 'sports',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      image: 'gallery/taekwondo-04.jpg',
      stats: {
        beneficiaries: '200+',
        impact: t.programs.sports
      }
    },
    {
      id: 'football',
      icon: Trophy,
      color: 'from-lime-500 to-green-600',
      image: 'gallery/woman-01.jpg',
      stats: {
        beneficiaries: '150+',
        impact: t.programs.football 
      }
    }
  ];
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="gallery/craft-01.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
              <span className="text-white/90 text-sm font-medium">{t.common.activePrograms.replace('{count}', '13')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.programs.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {t.programs.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.id}
                id={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={t.programs[prog.id as keyof typeof t.programs]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${prog.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <prog.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {t.programs[prog.id as keyof typeof t.programs]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {t.programs[`${prog.id}Desc` as keyof typeof t.programs]}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#D4AF37]">{prog.stats.beneficiaries}</p>
                      <p className="text-xs text-gray-500">{prog.stats.impact}</p>
                    </div>
                    <Link
                      to={`/donate#${prog.id}`}
                      className="inline-flex items-center gap-2 text-[#1E3A5F] font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      Support This Program
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Taekwondo Highlight */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
                <TrophyIcon className="w-4 h-4" />
                {t.common.featuredProgram}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
                {t.programs.taekwondoExcellenceTitle}
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                {t.programs.taekwondoExcellenceDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-3xl font-bold text-[#D4AF37]">4+</p>
                  <p className="text-white/70 text-sm">{t.common.championshipTrophies.replace('{count}', '')}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-3xl font-bold text-[#10B981]">200+</p>
                  <p className="text-white/70 text-sm">{t.common.youthTrained.replace('{count}', '')}</p>
                </div>
              </div>

              <Link
                to="/donate#sports"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] rounded-full font-semibold hover:shadow-xl transition-all group"
              >
                {t.programs.supportThisProgram}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="gallery/taekwondo-01.jpg"
                alt="Taekwondo training"
                className="rounded-xl shadow-xl h-64 w-full object-cover"
              />
              <img
                src="gallery/taekwondo-02.jpg"
                alt="Championship celebration"
                className="rounded-xl shadow-xl h-64 w-full object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37]/10 via-white to-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-4">
            {t.programs.supportProgramsTitle}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t.programs.supportProgramsSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {t.nav.donate}
            </Link>
            <Link
              to="/sponsor"
              className="px-8 py-4 bg-[#1E3A5F] text-white rounded-full font-semibold hover:bg-[#0F2744] transition-all"
            >
              {t.nav.sponsor}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
