import { useState } from 'react';
import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Database,
  Gem,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

type Tech = {
  name: string;
  icon?: string;
  mark?: LucideIcon;
  tint: string;
  wordmark?: boolean;
};

type Group = {
  label: string;
  accent: string;
  items: Tech[];
};

const groups: Group[] = [
  {
    label: 'Front-End',
    accent: '#61DAFB',
    items: [
      { name: 'React JS', icon: '/tech-icons/react.svg', tint: '#61DAFB' },
      { name: 'Angular', icon: '/tech-icons/angular.svg', tint: '#DD0031' },
      { name: 'Next JS', icon: '/tech-icons/nextdotjs.svg', tint: '#111111' },
      { name: 'Vue JS', icon: '/tech-icons/vuedotjs.svg', tint: '#4FC08D' },
    ],
  },
  {
    label: 'Back-End',
    accent: '#5FA04E',
    items: [
      { name: 'Node JS', icon: '/tech-icons/nodedotjs.svg', tint: '#5FA04E' },
      { name: 'PHP', icon: '/tech-icons/php.svg', mark: Code2, tint: '#777BB4' },
      { name: 'Python', icon: '/tech-icons/python.svg', mark: Terminal, tint: '#3776AB' },
      { name: '.NET', icon: '/tech-icons/dotnet.svg', tint: '#512BD4', wordmark: true },
      { name: 'Express.js', icon: '/tech-icons/express.svg', tint: '#111111' },
    ],
  },
  {
    label: 'Mobile',
    accent: '#02569B',
    items: [
      { name: 'iOS', icon: '/tech-icons/apple.svg', mark: Smartphone, tint: '#000000' },
      { name: 'Android', icon: '/tech-icons/android.svg', mark: TabletSmartphone, tint: '#3DDC84' },
      { name: 'Flutter', icon: '/tech-icons/flutter.svg', tint: '#02569B' },
      { name: 'React Native', icon: '/tech-icons/react.svg', tint: '#61DAFB' },
    ],
  },
  {
    label: 'Trending Technologies',
    accent: '#7C3AED',
    items: [
      { name: 'PyTorch', icon: '/tech-icons/pytorch.svg', tint: '#EE4C2C' },
      { name: 'UiPath', icon: '/tech-icons/uipath.svg', tint: '#FA4616' },
      { name: 'Automation Anywhere', mark: Bot, tint: '#EA580C' },
      { name: 'Blue Prism', mark: Gem, tint: '#0073CF' },
      { name: 'OpenAI', mark: Sparkles, tint: '#10A37F' },
      { name: 'Hugging Face', icon: '/tech-icons/huggingface.svg', tint: '#FFD21E' },
      { name: 'spaCy', icon: '/tech-icons/spacy.svg', tint: '#09A3D5' },
    ],
  },
  {
    label: 'Cloud Platforms',
    accent: '#FF9900',
    items: [
      { name: 'Amazon Web Services', mark: Cloud, tint: '#FF9900' },
      { name: 'Microsoft Azure', mark: Cloud, tint: '#0078D4' },
      { name: 'Google Cloud Platform', icon: '/tech-icons/googlecloud.svg', tint: '#4285F4' }
    ],
  },
  {
    label: 'Business Intelligence & Analytics',
    accent: '#F2C811',
    items: [
      { name: 'Power BI', mark: BarChart3, tint: '#F2C811' },
      { name: 'Big Data Solutions', mark: Database, tint: '#1863BA' },
    ],
  },
];

function TechMark({ item }: { item: Tech }) {
  const [imgFailed, setImgFailed] = useState(false);
  const Mark = item.mark;

  if (item.icon && !imgFailed) {
    return (
      <img
        src={item.icon}
        alt=""
        className={item.wordmark ? 'h-4 w-10 shrink-0 object-contain' : 'h-5 w-5 shrink-0 object-contain'}
        onError={() => setImgFailed(true)}
      />
    );
  }
  if (!Mark) return null;
  return <Mark className="h-5 w-5 shrink-0" style={{ color: item.tint }} />;
}

export default function TechStacksWeUse() {
  return (
    <section className="relative py-20 md:py-24" style={{ background: 'var(--background)' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(560px 320px at 16% 30%, rgba(124,58,237,0.14), transparent 70%), radial-gradient(640px 360px at 82% 70%, rgba(0,178,254,0.16), transparent 72%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:gap-14 lg:px-10">
        <div className="lg:sticky lg:top-[104px] lg:self-start">
          <h2 className="text-4xl font-800 leading-tight md:text-5xl" style={{ color: 'var(--text-primary)' }}>
            <span className="services-title-accent">Tech Stacks</span> We Use
          </h2>
          <p className="mt-4 text-lg font-700" style={{ color: 'var(--text-primary)' }}>
            Modern Technologies. Powerful Digital Solutions.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
            We leverage modern and proven technologies across frontend, backend, mobile, cloud, DevOps, databases, and AI to build high-performance, scalable, secure, and future-ready digital solutions. Our technology expertise helps transform ideas into reliable products and accelerate development.
          </p>
          <div
            className="relative mt-8 overflow-hidden rounded-[28px]"
            style={{ background: 'radial-gradient(circle at 50% 58%, #1d4f8c 0%, #0B2545 58%, #07182E 100%)' }}
          >
            <img
              src="/technologies.png"
              alt="Engineer working across cloud, data, and AI interfaces"
              className="relative w-full object-contain mix-blend-screen"
              style={{
                maskImage: 'radial-gradient(ellipse at 50% 52%, #000 58%, transparent 82%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 52%, #000 58%, transparent 82%)',
              }}
            />
          </div>
        </div>

        <div className="tech-stack-panel rounded-[28px] p-6 md:p-8">
          <div className="flex flex-col gap-7">
            {groups.map((group) => (
              <div key={group.label}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-sm font-700" style={{ color: 'var(--text-secondary)' }}>
                    {group.label}
                  </span>
                  <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${group.accent}, transparent)` }} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={`${group.label}-${item.name}`}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border px-3 py-2 text-sm font-600 transition-transform duration-300 hover:-translate-y-0.5"
                      style={{
                        background: '#FFFFFF',
                        borderColor: 'rgba(15,23,42,0.08)',
                        color: '#0F172A',
                        boxShadow: '0 6px 16px rgba(11,37,69,0.05)',
                      }}
                    >
                      <span
                        className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                        style={{ background: group.accent, opacity: 0.22 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <TechMark item={item} />
                        {item.wordmark ? <span className="sr-only">{item.name}</span> : item.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
