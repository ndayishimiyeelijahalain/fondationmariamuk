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
  HelpCircle,
  Trophy,
  Quote,
} from 'lucide-react';

import { useI18n } from '../i18n';

// -----------------------------
// SAFE translation type helper
// -----------------------------
type T = ReturnType<typeof useI18n>['t'];

// -----------------------------
// Counter hook
// -----------------------------
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

// -----------------------------
// HOME PAGE
// -----------------------------
export default function HomePage() {
  const { t } = useI18n();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#0F2744] to-[#0A1929]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
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
                Since 1978 • {t.about.recognition ?? 'Recognition'}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/donate"
                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold flex items-center gap-2"
              >
                <Heart />
                {t.hero.donate}
              </Link>

              <Link
                to="/sponsor"
                className="px-8 py-4 bg-white/10 text-white rounded-full"
              >
                <Users />
                {t.hero.sponsor}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* IMPACT */}
      <ImpactStats t={t} />

      {/* MISSION */}
      <MissionSection t={t} />

      {/* PROGRAMS */}
      <ProgramsGrid t={t} />

      {/* CTA */}
      <CTASection t={t} />
    </div>
  );
}

// -----------------------------
// IMPACT STATS
// -----------------------------
function ImpactStats({ t }: { t: T }) {
  const stats = [
    { value: 5000, label: t.impact.children, icon: Heart },
    { value: 2500, label: t.impact.women, icon: Users },
    { value: 46, label: t.impact.years, icon: Calendar },
    { value: 50, label: t.impact.communities, icon: MapPin },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((s, i) => {
          const counter = useCounter(s.value);

          return (
            <div key={i} ref={counter.ref} className="text-center">
              <s.icon className="mx-auto mb-3 text-blue-900" />
              <div className="text-4xl font-bold text-blue-900">
                {counter.count}+
              </div>
              <p>{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// -----------------------------
// MISSION
// -----------------------------
function MissionSection({ t }: { t: T }) {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">{t.about.mission}</h2>
      <p className="max-w-2xl mx-auto opacity-80">
        {t.about.missionText}
      </p>
    </section>
  );
}

// -----------------------------
// PROGRAMS
// -----------------------------
function ProgramsGrid({ t }: { t: T }) {
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
              className="bg-white p-6 rounded-xl shadow"
            >
              <Icon className="mb-3 text-blue-900" />
              <h3 className="font-semibold text-[#1E3A5F]">                {t.programs?.[key] ?? key}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// -----------------------------
// CTA (UPDATED PREMIUM VERSION)
// -----------------------------
function CTASection({ t }: { t: T }) {
  return (
    <section className="relative py-24 text-center text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
  <div
    className="absolute inset-0 bg-cover"
    style={{
      backgroundImage: "url('/fondation-mariam/impact-child-portrait-02.jpg')",
      backgroundPosition: "center 25%",
      backgroundSize: "cover",
    }}
  />

  <div className="absolute inset-0 bg-blue-900/80" />
</div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">
  {t.cta.title}
</h2>

<p className="text-white/80 text-lg mb-8">
  {t.cta.subtitle}
</p>

<Heart />

        <Link
          to="/donate"
          className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:scale-105 transition"
        >
          <Heart />
          {t.cta.button}        </Link>
      </div>
    </section>
  );
}