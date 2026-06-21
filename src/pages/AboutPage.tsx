import { motion } from 'framer-motion';
import {
  Heart,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Calendar,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function AboutPage() {
  const { t } = useI18n();
  const safeT = useSafeT();

  const values = [
    { key: 'compassion', icon: Heart, color: 'from-rose-500 to-rose-600' },
    { key: 'integrity', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { key: 'excellence', icon: Award, color: 'from-amber-500 to-amber-600' },
    { key: 'collaboration', icon: Users, color: 'from-emerald-500 to-emerald-600' },
  ];

  const timeline = [
    { year: '1978', title: 'Création de la Fondation', desc: 'Début du soutien aux enfants orphelins à Bujumbura' },
    { year: '1990', title: 'Programmes éducatifs', desc: 'Lancement du premier programme de bourses scolaires' },
    { year: '2005', title: 'Initiative de santé communautaire', desc: 'Extension vers l’aide médicale et les soins de santé de base' },
    { year: '2015', title: 'Autonomisation des femmes', desc: 'Mise en place de formations professionnelles pour les femmes vulnérables' },
    { year: '2020', title: 'Reconnaissance officielle', desc: 'Obtention de l’Ordonnance Ministérielle N°550/936' },
    { year: '2024', title: 'Renforcement de l’impact', desc: 'Extension des programmes sociaux à travers le Burundi' },
    { year: '2026', title: 'Transformation digitale et expansion', desc: 'Modernisation des systèmes et amélioration de la transparence grâce aux outils numériques' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* HERO - Image: leadership-team-02.jpg */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/fondation-mariam/leadership-team-02.jpg"
            alt="Fondation Mariam Team"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm font-medium">Depuis 1978 • Plus de 48 ans d’impact</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-white mb-6">
              {safeT('about.title', 'À Propos de Fondation Mariam')}
            </h1>
            <p className="text-xl text-[#D4AF37] font-serif italic">
              {safeT('about.subtitle', 'La Lumière de la Nation depuis 1978')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] rounded-3xl p-8 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <Target className="w-10 h-10 text-[#D4AF37] mb-4" />
            <h2 className="text-2xl font-bold mb-4">{safeT('about.mission', 'Notre Mission')}</h2>
            <p className="text-white/80">{safeT('about.missionText', 'Soutenir et protéger les enfants orphelins, les femmes vulnérables, les enfants en situation de handicap, les enfants non accompagnés, les femmes détenues et les communautés marginalisées à travers l\'éducation, les soins de santé, l\'autonomisation, la protection, le développement culturel, le sport et l\'assistance humanitaire.')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#10B981] to-[#047857] rounded-3xl p-8 text-white overflow-hidden"
          >
            <Eye className="w-10 h-10 text-white mb-4" />
            <h2 className="text-2xl font-bold mb-4">{safeT('about.vision', 'Notre Vision')}</h2>
            <p className="text-white/90">{safeT('about.visionText', 'Un Burundi où chaque enfant et chaque femme vulnérable peut vivre avec dignité, espoir, protection, opportunité et un avenir meilleur.')}</p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#1E3A5F]">{safeT('about.values', 'Nos Valeurs')}</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.key}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow text-center"
            >
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${val.color} rounded-2xl flex items-center justify-center mb-4`}>
                <val.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{safeT(`about.${val.key}`, val.key)}</h3>
              <p className="text-sm text-gray-600">{safeT(`about.${val.key}Desc`, '')}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#1E3A5F] mb-16">
            {safeT('about.history', 'Notre Histoire')}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D4AF37] via-[#10B981] to-[#D4AF37]" />
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                className={`flex items-center gap-8 mb-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow inline-block">
                    <span className="text-[#D4AF37] font-bold">{item.year}</span>
                    <h3 className="font-semibold text-[#1E3A5F]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#D4AF37] rounded-full ring-4 ring-[#D4AF37]/20" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37]/10 to-[#10B981]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <Award className="w-12 h-12 mx-auto text-[#D4AF37]" />
            <h2 className="text-2xl font-bold mt-4">{safeT('about.recognition', 'Reconnaissance Officielle')}</h2>
            <p className="text-gray-600 mt-2">{safeT('about.recognitionText', 'Reconnue par le Ministère de l\'Intérieur du Burundi')}</p>
            <p className="mt-4 font-mono text-[#D4AF37]">{safeT('about.ordNumber', 'Ord. Min. N°550/936 du 05/06/2020')}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-[#1E3A5F] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nous rendre visite</h2>
        <p className="text-white/80">Kinama, Bujumbura - Burundi</p>
        <p className="text-white/80">BP 398</p>
      </section>
    </div>
  );
}