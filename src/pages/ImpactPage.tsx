import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  BookOpen,
  HeartPulse,
  Utensils,
  GraduationCap,
  Trophy,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

function AnimatedCounter({ end, suffix = '', label, icon: Icon, color, description }: {
  end: number; suffix?: string; label: string; icon: React.ElementType;
  color: string; description?: string;
}) {
  const { count, ref } = useCounter(end);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-5xl font-black text-[#1E3A5F] mb-2 tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-700 font-semibold mb-1">{label}</p>
      {description && <p className="text-gray-400 text-xs mt-1">{description}</p>}
    </motion.div>
  );
}

export default function ImpactPage() {
  const { t } = useI18n();
  const safeT = useSafeT();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/fondation-mariam/impact-child-portrait-01.jpg"
            alt="Child portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm font-medium">
                {safeT('impact.subtitle', 'Verified Impact Data')}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              {safeT('impact.title', 'Our Impact')}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {safeT('impact.subtitle', 'Decades of transformation and hope')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRIMARY STATISTICS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-semibold mb-4">
              {safeT('impact.subtitle', 'Current Beneficiaries')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('impact.children', 'Children We Support Today')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {safeT('impact.subtitle', 'Active beneficiaries currently enrolled in our programs')}
            </p>
          </motion.div>

          {/* Hero stat: 76 children */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] rounded-3xl p-8 sm:p-12 text-white overflow-hidden text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Heart className="w-10 h-10 text-white" fill="white" />
                </div>
                <TotalCounter end={76} label={safeT('impact.children', 'Children Currently Supported')} />
                <p className="text-white/70 text-sm max-w-md mx-auto mt-3">
                  {safeT('impact.subtitle', 'Every child receives education, nutrition, healthcare, and psychosocial support through our active programs.')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Boys vs Girls breakdown - CORRIGÉ: 42 GARÇONS, 34 FILLES */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            {/* Boys - 42 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <GenderCounter end={42} label={safeT('impact.boys', 'Garçons')} color="text-blue-600" />
              <div className="mt-4">
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '55.3%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">55% {safeT('impact.ofBeneficiaries', 'des bénéficiaires')}</p>
              </div>
            </motion.div>

            {/* Girls - 34 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <GenderCounter end={34} label={safeT('impact.girls', 'Filles')} color="text-pink-600" />
              <div className="mt-4">
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '44.7%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-2.5 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">45% {safeT('impact.ofBeneficiaries', 'des bénéficiaires')}</p>
              </div>
            </motion.div>
          </div>

          {/* Visual breakdown bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
          >
            <h3 className="text-center font-semibold text-[#1E3A5F] mb-4">
              {safeT('impact.genderDistribution', 'Répartition par Genre')}
            </h3>
            <div className="flex rounded-xl overflow-hidden h-10 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '55.3%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white font-bold text-sm"
              >
                42 {safeT('impact.boys', 'Garçons')}
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '44.7%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-sm"
              >
                34 {safeT('impact.girls', 'Filles')}
              </motion.div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> {safeT('impact.boys', 'Garçons')} (55.3%)</span>
              <span className="font-bold text-[#1E3A5F]">76 {safeT('impact.total', 'Total')}</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-pink-500 inline-block" /> {safeT('impact.girls', 'Filles')} (44.7%)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CUMULATIVE HISTORICAL IMPACT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-semibold mb-4">
              {safeT('impact.since1978', 'Depuis 1978')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('impact.cumulative', 'Impact Historique Cumulé')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {safeT('impact.cumulativeDesc', 'Plus de 46 ans de service humanitaire continu à travers le Burundi')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCounter
              end={46}
              label={safeT('impact.years', 'Years of Service')}
              icon={Calendar}
              color="from-amber-500 to-orange-500"
              description={safeT('impact.continuousService', 'Service humanitaire continu')}
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              label={safeT('impact.communities', 'Communities Reached')}
              icon={MapPin}
              color="from-emerald-500 to-emerald-600"
              description={safeT('impact.communitiesDesc', 'Quartiers et communautés touchées')}
            />
            <AnimatedCounter
              end={1200}
              suffix="+"
              label={safeT('impact.women', 'Women Empowered')}
              icon={Sparkles}
              color="from-pink-500 to-rose-500"
              description={safeT('impact.womenDesc', 'À travers les programmes de formation et d\'autonomisation')}
            />
            <AnimatedCounter
              end={4}
              label={safeT('programs.taekwondoTrophies', 'Taekwondo Trophies')}
              icon={Trophy}
              color="from-[#D4AF37] to-[#B8942E]"
              description={safeT('impact.trophiesDesc', 'Victoires aux championnats régionaux')}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('impact.stories', 'Histoires de Transformation')}
            </h2>
            <p className="text-gray-500">{safeT('impact.storiesDesc', 'Des vies réelles changées par votre générosité')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: '/fondation-mariam/education-girls-uniforms-01.jpg',
                name: 'Marie-Claire, 19',
                program: safeT('programs.education', 'Programme Éducatif'),
                quote: safeT('impact.story1', 'Fondation Mariam m\'a donné l\'éducation dont j\'avais besoin. Aujourd\'hui je me prépare pour l\'université et je veux devenir médecin pour aider ma communauté.')
              },
              {
                image: '/fondation-mariam/sports-taekwondo-girls-01.jpg',
                name: 'Jean-Baptiste, 14',
                program: safeT('programs.sports', 'Programme Taekwondo'),
                quote: safeT('impact.story2', 'Grâce au Taekwondo, j\'ai appris la discipline et la confiance. Nous avons gagné le championnat régional et je suis fier de représenter notre fondation.')
              },
              {
                image: '/fondation-mariam/women-empowerment-community-01.jpg',
                name: 'Émilienne',
                program: safeT('programs.women', 'Autonomisation des Femmes'),
                quote: safeT('impact.story3', 'La formation en couture a changé ma vie. Maintenant je gère ma propre entreprise et je peux nourrir et éduquer mes enfants avec dignité.')
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">{story.name}</p>
                    <span className="inline-block bg-[#D4AF37] text-[#1E3A5F] text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                      {story.program}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed italic">"{story.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A5F] mb-4">
              {safeT('impact.ctaTitle', 'Aidez-nous à Toucher Plus d\'Enfants')}
            </h2>
            <p className="text-[#1E3A5F]/80 mb-8 max-w-xl mx-auto">
              {safeT('impact.ctaDesc', '76 enfants comptent sur votre soutien. Chaque don crée un changement durable.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="group px-8 py-4 bg-[#1E3A5F] text-white rounded-full font-bold hover:bg-[#0F2744] transition-all flex items-center justify-center gap-2 shadow-xl">
                <Heart className="w-5 h-5" fill="white" />
                {safeT('hero.donate', 'Donate Now')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/sponsor" className="px-8 py-4 bg-white/30 text-[#1E3A5F] rounded-full font-bold hover:bg-white/50 transition-all border border-[#1E3A5F]/20">
                {safeT('nav.sponsor', 'Sponsor a Child')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TotalCounter({ end, label }: { end: number; label: string }) {
  const { count, ref } = useCounter(end, 2.5);
  return (
    <div ref={ref}>
      <div className="text-8xl font-black text-white leading-none mb-3">{count}</div>
      <p className="text-xl font-semibold text-[#D4AF37]">{label}</p>
    </div>
  );
}

function GenderCounter({ end, label, color }: { end: number; label: string; color: string }) {
  const { count, ref } = useCounter(end, 2);
  return (
    <div ref={ref}>
      <div className={`text-6xl font-black ${color} leading-none mb-2`}>{count}</div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </div>
  );
}