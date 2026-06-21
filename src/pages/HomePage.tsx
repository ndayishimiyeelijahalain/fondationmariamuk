import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  BookOpen,
  Utensils,
  HeartPulse,
  Accessibility,
  Sparkles,
  Shield,
  GraduationCap,
  Home,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

type T = ReturnType<typeof useI18n>['t'];

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
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

export default function HomePage() {
  const { t } = useI18n();
  const safeT = useSafeT();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* HERO - Image: hero-main.jpg */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#0F2744] to-[#0A1929]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{ backgroundImage: "url('/hero/hero-main.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#1E3A5F]/50 to-transparent opacity-90" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-20"
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="text-white/90 text-sm font-medium">
                Since 1978 • {safeT('about.recognition', 'Recognition')}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              {safeT('hero.title', 'Bringing Hope To Every Child, Every Woman, Every Future')}
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              {safeT('hero.subtitle', 'Since 1978, Fondation Mariam has transformed lives through education, protection, empowerment, healthcare, sports, culture, and humanitarian support.')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/donate"
                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                <Heart />
                {safeT('hero.donate', 'Donate Now')}
              </Link>

              <Link
                to="/sponsor"
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                <Users />
                {safeT('hero.sponsor', 'Sponsor a Child')}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* IMPACT STATS */}
      <ImpactStats t={t} safeT={useSafeT()} />

      {/* MISSION SECTION */}
      <MissionSection t={t} safeT={useSafeT()} />

      {/* PROGRAMS GRID */}
      <ProgramsGrid t={t} safeT={useSafeT()} />

      {/* CTA SECTION - Image: impact-child-portrait-02.jpg */}
      <CTASection t={t} safeT={useSafeT()} />
    </div>
  );
}

function ImpactStats({ t, safeT }: { t: T; safeT: (key: string, fallback: string) => string }) {
  const stats = [
    { value: 5000, label: safeT('impact.children', 'Children Supported'), icon: Heart },
    { value: 2500, label: safeT('impact.women', 'Women Empowered'), icon: Users },
    { value: 46, label: safeT('impact.years', 'Years of Service'), icon: Calendar },
    { value: 50, label: safeT('impact.communities', 'Communities Reached'), icon: MapPin },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((s, i) => {
          const counter = useCounter(s.value);
          return (
            <div key={i} ref={counter.ref} className="text-center">
              <s.icon className="mx-auto mb-3 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900">{counter.count}</div>
              <p>{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MissionSection({ t, safeT }: { t: T; safeT: (key: string, fallback: string) => string }) {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">{safeT('about.mission', 'Our Mission')}</h2>
      <p className="max-w-2xl mx-auto opacity-80">
        {safeT('about.missionText', 'Support and protect orphaned children, vulnerable women, children with disabilities, unaccompanied children, women prisoners, and marginalized communities through education, healthcare, empowerment, protection, cultural development, sports, and humanitarian assistance.')}
      </p>
    </section>
  );
}

function ProgramsGrid({ t, safeT }: { t: T; safeT: (key: string, fallback: string) => string }) {
  const programs = [
    'orphanSupport',
    'education',
    'food',
    'healthcare',
    'disability',
    'women',
    'prisoners',
    'vocational',
  ] as const;

  const icons = {
    orphanSupport: Home,
    education: BookOpen,
    food: Utensils,
    healthcare: HeartPulse,
    disability: Accessibility,
    women: Sparkles,
    prisoners: Shield,
    vocational: GraduationCap,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {programs.map((key) => {
          const Icon = icons[key];
          return (
            <Link
              key={key}
              to={`/programs#${key}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Icon className="mb-3 text-blue-900" />
              <h3 className="font-semibold">{safeT(`programs.${key}`, key)}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function CTASection({ t, safeT }: { t: T; safeT: (key: string, fallback: string) => string }) {
  const title = safeT('donate.title', 'Your Generosity Creates Lasting Change');
  const subtitle = safeT('donate.subtitle', 'Every contribution transforms lives and brings hope to the most vulnerable.');
  const donateText = safeT('hero.donate', 'Donate Now');

  return (
    <section className="relative py-24 text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/fondation-mariam/impact-child-portrait-02.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-white/80 text-lg mb-8">{subtitle}</p>
        <Link
          to="/donate"
          className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:scale-105 transition"
        >
          <Heart />
          {donateText}
        </Link>
      </div>
    </section>
  );
}