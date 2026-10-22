import { ArrowRight, BarChart3, Cloud, Code2, Cpu, Play } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroTeam from '@/assets/image.png';
import HomeHeroBackground from '../home/HomeHeroBackground';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 18, stiffness: 200 },
  },
};

const serviceCards = [
  { label: 'AI & Data Analytics', icon: BarChart3, className: 'service-card--digital' },
  { label: 'Cloud Migration', icon: Cloud, className: 'service-card--cloud' },
  { label: 'Custom Software', icon: Code2, className: 'service-card--software' },
  { label: 'IT Consulting', icon: Cpu, className: 'service-card--consulting' },
];

const heroStats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '8B+', label: 'Transactions/mo' },
  { value: '40+', label: 'Industries' },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="home-hero-shell relative isolate overflow-x-clip">
      <HomeHeroBackground />

      <div className="hero-section relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-[92px] sm:px-8 sm:pb-16 sm:pt-[104px] md:pb-20 lg:px-10 lg:pt-[116px]">
        <motion.div
          className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6 xl:gap-10"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <div className="hero-copy max-w-[540px] lg:pr-2">
            <motion.p
              variants={itemVariants}
              className="hero-eyebrow mb-3 text-[11px] font-700 uppercase tracking-[0.14em] text-[#64748B] md:mb-4 md:text-xs dark:text-[#7DD3FC]/85"
            >
              Enterprise AI SaaS Platform
            </motion.p>

            <motion.h1 variants={itemVariants} className="hero-headline mb-4 md:mb-5">
              <span className="hero-headline-line">Powering Businesses with</span>{' '}
              <span className="hero-headline-line">
                Smarter <span className="hero-headline-accent">Technology &amp;</span>
              </span>{' '}
              <span className="hero-headline-line hero-headline-accent">Digital Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="hero-subcopy mb-7 max-w-[480px] text-[15px] leading-[1.65] text-[#515254] md:text-base dark:text-white/78"
            >
              Unify workflows, automate tasks, and power smarter operations from one platform built
              for modern teams.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta-row flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/pricing')}
                className="hero-cta-pill hero-cta-pill--primary"
              >
                Start Free Trial
                <span className="hero-cta-pill__icon" aria-hidden>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="hero-cta-pill hero-cta-pill--secondary"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-stats mt-8 md:mt-10">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="hero-stat">
                  {index > 0 && <span className="hero-stats__divider" aria-hidden />}
                  <div>
                    <div className="hero-stat__value">{stat.value}</div>
                    <div className="hero-stat__label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hero-visual mx-auto w-full min-w-0 max-w-[640px] sm:max-w-none lg:max-w-[780px] lg:justify-self-end"
          >
            <div className="hero-artwork" aria-hidden>
              <div className="hero-bg-circle">
              <div className="hero-rings">
                <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="300" cy="280" r="255" fill="rgba(185, 226, 255, 0.16)" />
                  <circle
                    cx="300"
                    cy="280"
                    r="218"
                    fill="rgba(133, 207, 255, 0.1)"
                    stroke="rgba(94, 184, 255, 0.22)"
                    strokeWidth="38"
                  />
                  <circle cx="300" cy="280" r="248" stroke="#2166B0" strokeWidth="7" opacity="0.92" />
                  <circle cx="300" cy="280" r="210" stroke="#00B2FE" strokeWidth="3" opacity="0.55" />
                  <path
                    d="M 60 380 A 220 220 0 0 1 480 120"
                    stroke="#00B2FE"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <circle cx="60" cy="380" r="5" fill="#1863BA" />
                  <circle cx="480" cy="120" r="5" fill="#00B2FE" />
                </svg>
              </div>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src={heroTeam}
                alt="CodeLink team collaborating on enterprise technology solutions"
              />

              <div className="hero-video-card max-lg:hidden">
                <div className="hero-video-card__copy">
                  <p className="hero-video-card__title">Design · Build · Scale</p>
                  <p className="hero-video-card__subtitle">
                    Enterprise SaaS solutions with world-class design and support.
                  </p>
                </div>
                <button
                  type="button"
                  className="hero-video-card__play"
                  aria-label="Watch product overview"
                  onClick={() => navigate('/products')}
                >
                  <Play className="h-5 w-5 fill-[#1863BA] text-[#1863BA]" />
                </button>
              </div>
            </div>

            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`service-card service-card--float ${card.className}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <span className="service-card__icon">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="service-card__label">{card.label}</span>
                </div>
              );
            })}

            <div className="hero-service-mobile lg:hidden">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="hero-service-mobile__card">
                    <span className="service-card__icon">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span className="hero-service-mobile__label">{card.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <p className="hero-trusted-caption relative z-10 mx-auto mt-6 text-center text-[10px] font-700 uppercase tracking-[0.16em] text-[#94A3B8] sm:mt-8 md:mt-10 dark:text-white/45">
          Trusted by 500+ global organizations
        </p>
      </div>
    </section>
  );
}
