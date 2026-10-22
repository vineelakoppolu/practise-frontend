import { ArrowRight, ClipboardList, FileCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors, logos } from '@/theme';
import {
  companyFeatured,
  companyItems,
  serviceColumns,
  technologyColumns,
  type NavColumn,
} from '@/data/navigation';
import { FillItem } from './FillItem';

export function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <MegaColumnGrid columns={serviceColumns} colsClass="grid-cols-2 xl:grid-cols-4" onNavigate={onNavigate} />
      <ServicesFooter onNavigate={onNavigate} />
    </div>
  );
}

export function TechnologyPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="pb-2">
      <MegaColumnGrid
        columns={technologyColumns}
        colsClass="grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        onNavigate={onNavigate}
      />
    </div>
  );
}

export function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[920px] flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          {companyItems.map((item) => (
            <FillItem key={item.title} {...item} dense onClick={onNavigate} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            onNavigate();
            navigate(companyFeatured.href);
          }}
          className="relative w-full overflow-hidden rounded-2xl p-6 text-left group min-h-[220px] lg:w-[400px] lg:shrink-0"
          style={{ background: colors.gradientPrimary }}
        >
          <span className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,#ffffff_0%,transparent_45%)]" />
          <span className="absolute -right-6 -bottom-10 h-40 w-40 rounded-3xl rotate-12 border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6" />
          <span className="absolute right-10 bottom-10 h-28 w-20 rounded-2xl -rotate-6 border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-1 group-hover:rotate-3" />
          <img
            src={logos.footer}
            alt=""
            className="relative mb-4 h-8 w-auto rounded-md object-contain"
          />
          <h3 className="relative mb-2 text-xl font-800 leading-tight text-white">
            {companyFeatured.title}
          </h3>
          <p className="relative mb-5 max-w-xs text-xs leading-relaxed text-white/80">
            {companyFeatured.description}
          </p>
          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-1.5 text-xs font-700 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#1863BA]">
            {companyFeatured.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
}

function MegaColumnGrid({
  columns,
  colsClass,
  onNavigate,
}: {
  columns: NavColumn[];
  colsClass: string;
  onNavigate: () => void;
}) {
  const maxRows = Math.max(0, ...columns.map((column) => column.items.length));
  const hasCtas = columns.some((column) => column.cta);
  // heading + item rows (+ shared CTA row when any column has one)
  const rowSpan = 1 + maxRows + (hasCtas ? 1 : 0);

  return (
    <div
      className={`grid ${colsClass} items-start gap-x-8 gap-y-3`}
      style={{
        gridTemplateRows: hasCtas
          ? `auto repeat(${maxRows}, auto) auto`
          : `auto repeat(${maxRows}, auto)`,
      }}
    >
      {columns.map((column, index) => (
        <div
          key={`${column.heading}-${index}`}
          className="grid grid-rows-subgrid content-start"
          style={{ gridRow: `span ${rowSpan}` }}
        >
          <ColumnHeading>{column.heading}</ColumnHeading>
          {Array.from({ length: maxRows }, (_, row) => {
            const item = column.items[row];
            if (!item) {
              return <div key={`empty-${column.heading}-${row}`} aria-hidden />;
            }
            return (
              <FillItem
                key={`${column.heading}-${item.title}`}
                {...item}
                dense
                onClick={onNavigate}
              />
            );
          })}
          {hasCtas &&
            (column.cta ? (
              <WorkCta
                href={column.cta.href}
                title={column.cta.title}
                onNavigate={onNavigate}
              />
            ) : (
              <div aria-hidden />
            ))}
        </div>
      ))}
    </div>
  );
}

function ColumnHeading({ children }: { children: string }) {
  return (
    <div className="mb-1.5 self-start">
      <h3 className="text-[13.5px] font-medium tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {children}
      </h3>
      <div className="mt-1.5 h-px w-full bg-gradient-to-r from-[#00B2FE] via-[#1863BA]/30 to-transparent" />
    </div>
  );
}

function ServicesFooter({ onNavigate }: { onNavigate: () => void }) {
  const navigate = useNavigate();
  const steps = [
    { icon: ClipboardList, label: '1. You Share the Requirements' },
    { icon: Users, label: '2. Get Access to the Talent Pool' },
    { icon: FileCheck, label: '3. Sign SLA & onboard experts' },
  ];

  return (
    <div
      className="mt-2.5 -mx-6 xl:-mx-10 flex flex-col items-start justify-between gap-3 px-6 py-3.5 lg:flex-row lg:items-center xl:px-10"
      style={{
        background: 'var(--background-soft)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
        {steps.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md"
              style={{ background: 'rgba(0, 178, 254, 0.12)', color: colors.primary }}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span className="text-[13px] font-medium" style={{ color: colors.textSecondary }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          onNavigate();
          navigate('/services');
        }}
        className="header-cta-shine inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-medium text-white"
        style={{ background: colors.gradientPrimary, boxShadow: '0 6px 16px rgba(24,99,186,0.22)' }}
      >
        Staff Augmentation
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function WorkCta({
  href,
  title,
  onNavigate,
}: {
  href: string;
  title: string;
  onNavigate: () => void;
}) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        onNavigate();
        navigate(href);
      }}
      className="group relative mt-2 w-full self-start overflow-hidden rounded-xl px-3 py-3 text-left"
      style={{
        background: 'linear-gradient(135deg, rgba(0,178,254,0.12), rgba(24,99,186,0.1))',
        border: '1px solid rgba(0,178,254,0.22)',
      }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#1863BA] to-[#00B2FE] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <img src={logos.header} alt="" className="h-6 w-auto object-contain" />
          <span className="text-[13px] font-semibold text-[#1863BA] transition-colors group-hover:text-white">
            {title}
          </span>
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-[#00B2FE] transition-colors group-hover:text-white" />
      </span>
    </button>
  );
}
