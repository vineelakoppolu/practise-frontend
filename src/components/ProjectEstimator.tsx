import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Globe2,
  LayoutTemplate,
  Megaphone,
  MonitorSmartphone,
  Search,
  ShoppingBag,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type Track = 'development' | 'marketing';
type Pace = 'standard' | 'accelerated';

type ProjectOption = {
  id: string;
  title: string;
  description: string;
  base: number;
  icon: LucideIcon;
};

type Capability = {
  id: string;
  title: string;
  add: number;
};

const developmentTypes: ProjectOption[] = [
  {
    id: 'website',
    title: 'Website',
    description: 'Company site, landing pages or portal',
    base: 1500,
    icon: Globe2,
  },
  {
    id: 'web-app',
    title: 'Web App',
    description: 'SaaS, dashboard or custom app',
    base: 4500,
    icon: LayoutTemplate,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'Android, iOS or cross-platform',
    base: 5500,
    icon: MonitorSmartphone,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Storefront, cart and checkout',
    base: 3500,
    icon: ShoppingBag,
  },
];

const marketingTypes: ProjectOption[] = [
  {
    id: 'brand',
    title: 'Brand Marketing',
    description: 'Positioning and brand presence',
    base: 1200,
    icon: Megaphone,
  },
  {
    id: 'seo',
    title: 'SEO Marketing',
    description: 'Organic visibility and content',
    base: 1500,
    icon: Search,
  },
  {
    id: 'paid',
    title: 'Paid Marketing',
    description: 'Ads, campaigns and tracking',
    base: 2000,
    icon: Target,
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Growth and community engagement',
    base: 1400,
    icon: BarChart3,
  },
];

const developmentCapabilities: Capability[] = [
  { id: 'design-system', title: 'Design System', add: 400 },
  { id: 'admin', title: 'Admin Dashboard', add: 600 },
  { id: 'api', title: 'API Integrations', add: 500 },
  { id: 'devops', title: 'Cloud & DevOps', add: 450 },
];

const marketingCapabilities: Capability[] = [
  { id: 'content', title: 'Content Strategy', add: 350 },
  { id: 'analytics', title: 'Analytics Setup', add: 300 },
  { id: 'creatives', title: 'Creative Pack', add: 400 },
  { id: 'landing', title: 'Landing Pages', add: 450 },
];

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProjectEstimator() {
  const navigate = useNavigate();
  const [track, setTrack] = useState<Track>('development');
  const [projectId, setProjectId] = useState(developmentTypes[0].id);
  const [selectedCaps, setSelectedCaps] = useState<string[]>([]);
  const [pace, setPace] = useState<Pace>('standard');

  const projectTypes = track === 'development' ? developmentTypes : marketingTypes;
  const capabilities = track === 'development' ? developmentCapabilities : marketingCapabilities;
  const activeProject = projectTypes.find((item) => item.id === projectId) ?? projectTypes[0];

  const switchTrack = (next: Track) => {
    if (next === track) return;
    setTrack(next);
    setProjectId(next === 'development' ? developmentTypes[0].id : marketingTypes[0].id);
    setSelectedCaps([]);
    setPace('standard');
  };

  const toggleCap = (id: string) => {
    setSelectedCaps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const estimate = useMemo(() => {
    const capsTotal = capabilities
      .filter((cap) => selectedCaps.includes(cap.id))
      .reduce((sum, cap) => sum + cap.add, 0);
    const subtotal = activeProject.base + capsTotal;
    return Math.round(subtotal * (pace === 'accelerated' ? 1.25 : 1));
  }, [activeProject, capabilities, selectedCaps, pace]);

  return (
    <section className="pe relative overflow-hidden">
      <div className="pe__aura" aria-hidden />

      <div className="pe__shell">
        <header className="pe__intro">
          <div className="pe__intro-copy max-w-2xl">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B] dark:text-[#94A3B8]">
                Interactive Project Estimator
              </span>
              <span className="home-blog-eyebrow__line" />
            </div>
            <h2 className="mb-3 text-[clamp(1.55rem,5.2vw,2.85rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0F172A] dark:text-white sm:mb-4">
              See what your{' '}
              <span className="text-[#1863BA] dark:text-[#00B2FE]">digital project</span> could
              include.
            </h2>
            <p className="text-[14px] leading-relaxed text-[#515254] dark:text-white/80 sm:text-[15px] md:text-base">
              Pick a path, add capabilities, and get an illustrative planning range — not a fixed
              quote.
            </p>
          </div>

          <div className="pe__track" role="tablist" aria-label="Project category">
            <button
              type="button"
              role="tab"
              aria-selected={track === 'development'}
              className={`pe__track-btn ${track === 'development' ? 'is-on' : ''}`}
              onClick={() => switchTrack('development')}
            >
              <Code2 className="h-4 w-4" aria-hidden />
              Development
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={track === 'marketing'}
              className={`pe__track-btn ${track === 'marketing' ? 'is-on' : ''}`}
              onClick={() => switchTrack('marketing')}
            >
              <Megaphone className="h-4 w-4" aria-hidden />
              Digital Marketing
            </button>
          </div>
        </header>

        <div className="pe__board">
          <div className="pe__panel">
            <div className="pe__block">
              <div className="pe__block-head">
                <span className="pe__num">01</span>
                <span className="pe__block-title">Project type</span>
              </div>
              <div className="pe__types" role="radiogroup" aria-label="Project type">
                {projectTypes.map((option) => {
                  const Icon = option.icon;
                  const on = option.id === projectId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      className={`pe__type ${on ? 'is-on' : ''}`}
                      onClick={() => setProjectId(option.id)}
                    >
                      <span className="pe__type-icon" aria-hidden>
                        <Icon strokeWidth={1.75} />
                      </span>
                      <span className="pe__type-text">
                        <span className="pe__type-name">{option.title}</span>
                        <span className="pe__type-desc">{option.description}</span>
                      </span>
                      <span className={`pe__type-dot ${on ? 'is-on' : ''}`} aria-hidden />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pe__block">
              <div className="pe__block-head">
                <span className="pe__num">02</span>
                <span className="pe__block-title">Optional capabilities</span>
              </div>
              <div className="pe__chips">
                {capabilities.map((cap) => {
                  const on = selectedCaps.includes(cap.id);
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      className={`pe__chip ${on ? 'is-on' : ''}`}
                      aria-pressed={on}
                      onClick={() => toggleCap(cap.id)}
                    >
                      <span className={`pe__chip-check ${on ? 'is-on' : ''}`} aria-hidden>
                        {on ? <Check strokeWidth={2.75} /> : null}
                      </span>
                      {cap.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pe__block pe__block--pace">
              <div className="pe__block-head">
                <span className="pe__num">03</span>
                <span className="pe__block-title">Delivery pace</span>
              </div>
              <div className="pe__pace" role="radiogroup" aria-label="Delivery pace">
                <button
                  type="button"
                  role="radio"
                  aria-checked={pace === 'standard'}
                  className={`pe__pace-btn ${pace === 'standard' ? 'is-on' : ''}`}
                  onClick={() => setPace('standard')}
                >
                  Standard
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={pace === 'accelerated'}
                  className={`pe__pace-btn ${pace === 'accelerated' ? 'is-on' : ''}`}
                  onClick={() => setPace('accelerated')}
                >
                  <Zap className="h-3.5 w-3.5" aria-hidden />
                  Accelerated
                </button>
              </div>
            </div>
          </div>

          <aside className="pe__quote">
            <div className="pe__quote-sheen" aria-hidden />
            <div className="pe__quote-top">
              <span className="pe__quote-badge">Planning range</span>
              <p className="pe__quote-selected">{activeProject.title}</p>
            </div>

            <p className="pe__quote-price" key={estimate}>
              {formatUsd(estimate)}
              <span>USD</span>
            </p>

            <ul className="pe__quote-meta">
              <li>{selectedCaps.length} add-on{selectedCaps.length === 1 ? '' : 's'}</li>
              <li>{pace === 'accelerated' ? 'Accelerated delivery' : 'Standard delivery'}</li>
            </ul>

            <p className="pe__quote-note">
              Illustrative range only. Final scope and quotation follow a project discussion.
            </p>

            <button
              type="button"
              className="pe__quote-cta"
              onClick={() => navigate('/company')}
            >
              Discuss this project
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="pe__quote-foot">No payment · No commitment</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
