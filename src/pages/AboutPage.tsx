import { motion } from 'framer-motion';
import {
  Heart,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Calendar,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

export default function AboutPage() {
  const { t } = useI18n();
  const safeT = useSafeT();

  // 🔍 Vérification (à retirer après)
  console.log('About translations:', t.about);

  const values = [
    { key: 'compassion', icon: Heart, color: 'from-rose-500 to-rose-600' },
    { key: 'integrity', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { key: 'excellence', icon: Award, color: 'from-amber-500 to-amber-600' },
    { key: 'collaboration', icon: Users, color: 'from-emerald-500 to-emerald-600' },
  ];

  const timelineYears = ['1978', '1990', '2005', '2015', '2020', '2024', '2026'];

  // Fonction sécurisée pour récupérer les traductions de l'histoire
  const getHistoryTranslation = (key: string, fallback: string) => {
    // Essayer d'abord avec about.historyDetails
    let value = t.about?.historyDetails?.[key as keyof typeof t.about.historyDetails];
    if (value) return value;
    
    // Fallback: essayer historyDetails au niveau racine
    value = (t as any).historyDetails?.[key];
    if (value) return value;
    
    return fallback;
  };

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/fondation-mariam/leadership-team-02.jpg"
            alt="Fondation Mariam Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm font-medium">
                {safeT('about.subtitle', 'Depuis 1978 • Plus de 48 ans d\'impact')}
              </span>
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
            <p className="text-white/80">{safeT('about.missionText', '')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#10B981] to-[#047857] rounded-3xl p-8 text-white overflow-hidden"
          >
            <Eye className="w-10 h-10 text-white mb-4" />
            <h2 className="text-2xl font-bold mb-4">{safeT('about.vision', 'Notre Vision')}</h2>
            <p className="text-white/90">{safeT('about.visionText', '')}</p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#1E3A5F]">
            {safeT('about.values', 'Nos Valeurs')}
          </h2>
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
              <h3 className="text-lg font-semibold text-[#1E3A5F]">
                {safeT(`about.${val.key}`, val.key)}
              </h3>
              <p className="text-sm text-gray-600">
                {safeT(`about.${val.key}Desc`, '')}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE - HISTORY */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#1E3A5F] mb-16">
            {safeT('about.history', 'Notre Histoire')}
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D4AF37] via-[#10B981] to-[#D4AF37]" />

            {timelineYears.map((year, idx) => {
              // Utiliser getHistoryTranslation pour chaque élément
              const yearText = getHistoryTranslation(`year${year}`, year);
              const titleText = getHistoryTranslation(`title${year}`, '');
              const descText = getHistoryTranslation(`desc${year}`, '');

              return (
                <motion.div
                  key={year}
                  className={`flex items-center gap-8 mb-12 ${
                    idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow inline-block">
                      <span className="text-[#D4AF37] font-bold">
                        {yearText}
                      </span>
                      <h3 className="font-semibold text-[#1E3A5F]">
                        {titleText}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {descText}
                      </p>
                    </div>
                  </div>

                  <div className="w-4 h-4 bg-[#D4AF37] rounded-full ring-4 ring-[#D4AF37]/20" />

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37]/10 to-[#10B981]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <Award className="w-12 h-12 mx-auto text-[#D4AF37]" />
            <h2 className="text-2xl font-bold mt-4">
              {safeT('about.recognition', 'Reconnaissance Officielle')}
            </h2>
            <p className="text-gray-600 mt-2">
              {safeT('about.recognitionText', '')}
            </p>
            <p className="mt-4 font-mono text-[#D4AF37]">
              {safeT('about.ordNumber', 'Ord. Min. N°550/936 du 05/06/2020')}
            </p>
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