import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FaviconParallax from './FaviconParallax';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 18, stiffness: 200 },
  },
};

const heroStats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '8B+', label: 'Transactions/mo' },
  { value: '40+', label: 'Industries' },
];

/** Codevian-inspired dark hero with large favicon cursor parallax on the right. */
export default function HeroV2() {
  const navigate = useNavigate();

  return (
    <section className="hero-v2-shell relative isolate overflow-x-clip">
      <div className="hero-v2-bg" aria-hidden>
        <div className="hero-v2-bg__wash" />
        <div className="hero-v2-bg__orb hero-v2-bg__orb--cyan" />
        <div className="hero-v2-bg__orb hero-v2-bg__orb--royal" />
        <div className="hero-v2-bg__orb hero-v2-bg__orb--deep" />
      </div>

      <div className="hero-v2-inner relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-10">
        <motion.div
          className="hero-v2-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-v2-copy hero-copy max-w-[560px]">
            <motion.p
              variants={itemVariants}
              className="hero-eyebrow mb-3 text-xs font-700 uppercase tracking-[0.14em] text-[#7DD3FC]/90 md:mb-3.5 md:text-[13px]"
            >
              Enterprise AI SaaS Platform
            </motion.p>

            <motion.h1 variants={itemVariants} className="hero-headline hero-v2-headline mb-3.5 md:mb-4">
              <span className="hero-headline-line">Powering Businesses with</span>{' '}
              <span className="hero-headline-line">
                Smarter <span className="hero-headline-accent">Technology &amp;</span>
              </span>{' '}
              <span className="hero-headline-line hero-headline-accent">Digital Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="hero-v2-subcopy mb-5 max-w-[480px] md:mb-6"
            >
              Unify workflows, automate tasks, and power smarter operations from one platform built
              for modern teams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => navigate('/pricing')}
                className="hero-cta-pill hero-cta-pill--primary hero-v2-cta"
              >
                Start today
                <span className="hero-cta-pill__icon" aria-hidden>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/solutions')}
                className="hero-v2-secondary inline-flex items-center gap-2 px-2 py-2 text-base font-700 text-white/90 transition-colors hover:text-[#00B2FE]"
              >
                Our Work
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-stats hero-v2-stats mt-8 md:mt-10">
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

          <motion.div variants={itemVariants} className="hero-v2-visual">
            <FaviconParallax />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
